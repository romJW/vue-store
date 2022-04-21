<template>
  <div>
    <Modal
      :isOpen="modal.isOpen"
      :isLoading="modal.isLoading"
      :onClose="() => modal.isOpen = false"
      class="!p-10 gap-2 flex flex-col"
    >
      <template v-slot:body>
        <span class="font-bold text-xl">Оставьте ваши данные</span>
        <span class="text-md">и наш проектировщик свяжется <br/> с Вами в ближайшее время</span>
        <div class="flex flex-col gap-2">
          <Input @onChange="v => form.name = v" type="text" placeholder="Ваше имя" />
          <Input @onChange="v => form.phone = v" type="tel" placeholder="Номер телефона" />
          <Button @click="sendRequest" data-type="default">Оставить заявку</Button>
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
    <aside class="relative text-white bg-sky-900">
      <img
        src="../../assets/hero.jpg"
        alt=""
        class="absolute inset-0 object-cover w-full h-full brightness-50"
      />
      <div class="relative max-w-screen-xl px-4 py-24 lg:py-36 2xl:py-52 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-col max-w-3xl mx-auto text-center gap-8">
          <h2 class="mt-2 text-4xl font-bold text-white sm:text-6xl">
            Строительство бассейнов <br class="inline md:hidden lg:inline"> “под ключ” <br> по Алматы и Казахстану
          </h2>
          <div class="flex flex-col lg:flex-row justify-center gap-4">
            <Button type="default" @click="modal.isOpen = true" class="lg:w-1/2">
              Оставить заявку
            </Button>
            <Button @click="$router.push('/#calculator')" type="alternative" class="lg:w-1/2">
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'

import Modal from '../../library/Modal.vue'
import Button from '../../library/Button.vue'
import Input from '../../library/Input.vue'
import LoadingOverlay from '../../library/LoadingOverlay.vue'

export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
      },
      modal: {
        isOpen: false,
        isLoading: false,
      }
    }
  },
  methods: {
    sendRequest() {
      this.modal.isLoading = true
      store.dispatch('clientRequests/send', form)
        .finally(() => {
          this.modal.isLoading = false
          this.modal.isOpen = false
        })
    }
  }
}
</script>

<style scoped>
aside {
  font-family: 'Oswald', sans-serif;
}

Button {
  @apply h-14 !text-lg;
}

</style>
