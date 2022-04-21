<template>
  <div>
    <Modal
      :isOpen="modal.isOpen"
      :isLoading="modal.isLoading"
      :onClose="() => modal.isOpen = false"
      class="!p-10 gap-2 flex flex-col"
    >
      <template v-slot:title>
        <span class="font-bold text-xl">Оставьте ваши данные</span>
      </template>
      <template v-slot:description>
        <span class="text-md">и наш проектировщик свяжется <br/> с Вами в ближайшее время</span>
      </template>
      <template v-slot:body>
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
    <div class="relative">

      <Card class="hidden md:flex flex-col absolute z-10 bg-white justify-center p-4 2xl:p-10 gap-4 top-10 left-10 2xl:left-80">
        <div>
          <span class="font-bold 2xl:text-3xl">Контакты</span>
        </div>
        <div class="flex gap-6 2xl:gap-10">
          <div class="flex flex-col grow">
            <span class="font-bold">г. Алматы</span>
            <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
            <a href="tel:+7 (771) 741-18-44">+7 (771) 741-18-44</a>
          </div>
          <div class="flex grow">
            <span>ул.Нурмакова, 1A</span>
          </div>
        </div>
        <div>
          <span @click="modal.isOpen = true" class="cursor-pointer italic text-sky-700 underline">
            Заказать обратный звонок
          </span>
        </div>
      </Card>

      <div class="md:hidden flex flex-col justify-center  p-4 gap-4">
        <div>
          <span class="font-bold text-xl">Контакты</span>
        </div>
        <div class="flex">
          <div class="flex flex-col grow">
            <span class="font-bold">г. Алматы</span>
            <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
            <a href="tel:+7 (771) 741-18-44">+7 (771) 741-18-44</a>
          </div>
          <div class="grow text-right">
            <span>ул.Нурмакова, 1A</span>
          </div>
        </div>
        <div>
          <span @click="modal.isOpen = true" class="cursor-pointer italic text-sky-700 underline">
            Заказать обратный звонок
          </span>
        </div>
      </div>

      <iframe src="https://yandex.com/map-widget/v1/-/CCUBJQD8xB" id="map-wrap" width="100%" height="500" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>
    </div>
  </div>
</template>

<script>
import Modal from             '../../library/Modal.vue'
import { Card } from '../../library'
import SearchInput from       '../../components/SearchInput.vue'
import InstagramLogoIcon from '../../components/icons/InstagramLogo.vue'
import OkLogoIcon from        '../../components/icons/OkLogo.vue'
import WhatsappLogoIcon from  '../../components/icons/WhatsappLogo.vue'
import VkLogoIcon from        '../../components/icons/VkLogo.vue'
import Input from             '../../library/Input.vue'
import Button from            '../../library/Button.vue'

import PriceListButton from '../../components/PriceListButton.vue'

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
      this.store.dispatch('clientRequests/send', form)
        .finally(() => {
          this.modal.isLoading = false
          this.modal.isOpen = false
        })
    }
  }
}
</script>
