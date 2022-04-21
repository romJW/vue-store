<template>
  <div>
    <Modal
      :isOpen="isOpen"
      :isLoading="isLoading"
      :onClose="() => isOpen = false"
      class="!p-10 gap-2 w-[450px] flex flex-col"
    >
      <template v-slot:title>
        <span class="font-bold text-xl">Оставьте ваши данные</span>
      </template>
      <template v-slot:description>
        <span class="text-md">Мы вышлем прайс лист на указанную почту</span>
      </template>
      <template v-slot:body>
        <div class="flex flex-col gap-2">
          <Input @onChange="v => state.email = v" type="email" placeholder="Email" />
          <Button @click="getPriceList" data-type="default">Отправить</Button>
          <div class="text-center text-gray-400">
            <span class="font-normal text-xs">
              Нажимая на кнопку, вы соглашаетесь с
            </span>
            <br/>
            <a class="font-normal text-xs" href="#">условиями обработки персональных данных</a>
          </div>
        </div>
      </template>
    </Modal>
    <Button @click="() => isOpen = true" type="alternative">Прайс лист</Button>
  </div>
</template>

<script>
import Modal from '../library/Modal.vue'
import directus from '../utils/directus.js'
import getLink from '../utils/assets.js'
import _ from 'lodash'
import api from '../utils/api.js'
import Input from '../library/Input.vue'
import Button from '../library/Button.vue'

export default {
  data() {
    return {
      isOpen: false,
      isLoading: false,
      email: "",
      dealers: [],
    }
  },
  methods: {
    async getPriceList() {
      try {
        state.isLoading = true
        const dealers = await directus.items("dealers").readByQuery({ filter: { email: { _eq: state.email } } })
        const dealer = _.head(dealers.data)
        if (dealer) {
          await this.$store.dispatch('clientRequests/send', {
            name: state.email,
            group: "dealer",
            content: "Запрос на прайс лист",
          })
          const files = await directus.files.readByQuery({ search: "Прайс лист" })
          const priceList = _.head(files.data)
          window.open(getLink(priceList.id))
        } else {
          await this.$store.dispatch('clientRequests/send', {
            name: state.email,
            content: "Запрос на прайслист от неизвестного пользователя",
          })
          throw new Error("Dealer not found!")
        }
      } catch (e) {

      } finally {
        this.isLoading = false
        this.isOpen = false
      }
    }
  }
}
</script>
