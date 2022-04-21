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
    <footer>
      <div class="max-w-screen-2xl px-4 py-16 mx-auto space-y-12 sm:px-6 lg:px-8">
        <div class="flex gap-4 items-center">
          <span class="block w-32 h-10 bg-gray-200 rounded-lg">
            <img src="../assets/abbex_logo.jpg" />
          </span>
          <span class="text-gray-500">Строительство бассейнов в Казахстане “под ключ”</span>
        </div>
        <hr>
        <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
          <div class="lg:order-last">
            <form class="max-w-sm">
              <SearchInput />
            </form>

            <Button @click="$router.push('/#calculator')" data-type="light" class="mt-4">
              Калькулятор стоимости бассейна
            </Button>

            <div class="flex mt-8 space-x-6 text-gray-500">
              <a class="hover:opacity-75" href="https://vk.com/abbex" target="_blank" rel="noreferrer">
                <span class="sr-only">VK</span>
                <VkLogoIcon class="w-8 h-8" color="#4267B2" />
              </a>

              <a class="hover:opacity-75" href="https://www.instagram.com/abbex.kz/" target="_blank" rel="noreferrer">
                <span class="sr-only">Instagram</span>
                <InstagramLogoIcon class="w-8 h-8" color="#4267B2" />
              </a>

              <a class="hover:opacity-75" href="https://wa.me/+77717411822" target="_blank" rel="noreferrer">
                <span class="sr-only">WhatsApp</span>
                <WhatsappLogoIcon class="w-8 h-8" color="#4267B2" />
              </a>

              <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
                <span class="sr-only">OK</span>
                <OkLogoIcon class="w-8 h-8" color="#4267B2" />
              </a>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-6">
            <div class="lg:col-span-2">
              <p class="font-bold">
                Информация
              </p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <nuxt-link class="hover:opacity-75" to="/">
                  Главная
                </nuxt-link>
                <nuxt-link class="hover:opacity-75" to="/page/o_kompanii">
                  О компании
                </nuxt-link>
                <nuxt-link class="hover:opacity-75" to="/page/portfolio">
                  Портфолио
                </nuxt-link>
                <nuxt-link class="hover:opacity-75" to="/page/faq">
                  Частые вопросы
                </nuxt-link>
                <nuxt-link class="hover:opacity-75" to="/page/sertifikaty">
                  Сертификаты
                </nuxt-link>
                <nuxt-link class="hover:opacity-75" to="/page/kontakty">
                  Контакты
                </nuxt-link>
              </nav>
            </div>

            <div class="lg:col-span-2">
              <p class="font-bold">
                Каталог
              </p>
              <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <a class="hover:opacity-75" href="/#polypropylene-pools">
                  Полипропиленовый бассейн
                </a>
                <a class="hover:opacity-75" href="/#block-pellicle-pools">
                  Блочно-пленочные бассейны
                </a>
                <a class="hover:opacity-75" href="/#pavilions">
                  Павильоны для бассейнов
                </a>
                <a class="hover:opacity-75" href="">
                  Оборудование для бассейнов
                </a>
                <a class="hover:opacity-75" href="">
                 SPA и сауны
                </a>
                <a class="hover:opacity-75" href="">
                  Все для террас
                </a>
                <div class="w-2/3">
                  <PriceListButton />
                </div>
              </nav>
            </div>

            <div class="lg:col-span-2">
              <p class="font-bold">
                Контакты
              </p>

              <nav class="flex flex-col mt-2 space-y-2 text-sm text-gray-500">
                <div class="flex flex-col gap-2">
                  <div class="flex flex-col">
                    <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
                    <span>пн–пт: 9:00–17:00</span>
                  </div>
                  <div class="flex flex-col">
                    <a href="mailto:info@abbex.kz">info@abbex.kz</a>
                    <span>пн–пт: 9:00–17:00</span>
                  </div>
                </div>
              </nav>

              <Button @click="modal.isOpen = true" type="default" class="mt-2">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>

        <p class="mt-8 text-xs text-gray-500">
          &copy; 2022 Abbex
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import InstagramLogoIcon from './icons/InstagramLogo.vue'
import OkLogoIcon from './icons/OkLogo.vue'
import WhatsappLogoIcon from './icons/WhatsappLogo.vue'
import VkLogoIcon from './icons/VkLogo.vue'

import Modal from '../library/Modal.vue'
import Input from '../library/Input.vue'
import Button from '../library/Button.vue'

import PriceListButton from './PriceListButton.vue'

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
      this.$store.dispatch('clientRequests/send', form)
        .finally(() => {
          this.modal.isLoading = false
          this.modal.isOpen = false
        })
    }
  }
}
</script>
