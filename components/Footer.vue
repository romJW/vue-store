<template>
  <footer>
    <div class="max-w-screen-2xl px-4 py-16 mx-auto space-y-12 sm:px-6 lg:px-8">
      <div class="flex gap-4 items-center">
        <img class="w-20 lg:w-40" src="@/assets/logo.png" />
        <span class="text-gray-500">Строительство бассейнов в Казахстане “под ключ”</span>
      </div>
      <hr />
      <div class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-3">
        <div class="lg:order-last">
          <form class="max-w-sm">
            <SearchInput />
          </form>

          <nuxt-link :to="{ path: '/', hash: '#calculator' }">
            <Button data-type="light" class="mt-4">
              Калькулятор стоимости бассейна
            </Button>
          </nuxt-link>

          <div class="flex mt-8 space-x-6 text-gray-500">
            <a
              class="hover:opacity-75"
              href="https://vk.com/abbex"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">VK</span>
              <fa-icon
                icon="fa-brands fa-vk"
                class="w-8 h-8"
                :style="{ color: '#4267B2' }"
              />
            </a>

            <a
              class="hover:opacity-75"
              href="https://www.instagram.com/abbex.kz/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">Instagram</span>
              <fa-icon
                icon="fa-brands fa-instagram-square"
                class="w-8 h-8"
                :style="{ color: '#4267B2' }"
              />
            </a>

            <a
              class="hover:opacity-75"
              href="https://wa.me/+77717411822"
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">WhatsApp</span>
              <fa-icon
                icon="fa-brands fa-whatsapp-square"
                class="w-8 h-8"
                :style="{ color: '#4267B2' }"
              />
            </a>

            <a
              class="hover:opacity-75"
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <span class="sr-only">OK</span>
              <fa-icon
                icon="fa-brands fa-odnoklassniki-square"
                class="w-8 h-8"
                :style="{ color: '#4267B2' }"
              />
            </a>
          </div>
        </div>

        <div
          class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-6"
        >
          <div class="lg:col-span-2">
            <p class="font-bold">Информация</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <nuxt-link class="hover:opacity-75" to="/"> Главная </nuxt-link>
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
            <p class="font-bold">Каталог</p>
            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <nuxt-link class="hover:opacity-75" to="/#polypropylene-pools">
                Полипропиленовый бассейн
              </nuxt-link>
              <nuxt-link class="hover:opacity-75" to="/#block-pellicle-pools">
                Блочно-пленочные бассейны
              </nuxt-link>
              <nuxt-link class="hover:opacity-75" to="/#pavilions">
                Павильоны для бассейнов
              </nuxt-link>
              <nuxt-link class="hover:opacity-75" to="/search">
                Оборудование для бассейнов
              </nuxt-link>
              <nuxt-link class="hover:opacity-75" to="/catalog/spa">
                SPA и сауны
              </nuxt-link>
              <a class="hover:opacity-75" href="http://dpksklad.kz/">
                Все для террас
              </a>
              <div class="w-2/3">
                <PriceListButton />
              </div>
            </nav>
          </div>

          <div class="lg:col-span-2">
            <p class="font-bold">Контакты</p>

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
            <Button
              @click="showSubmiteOrderModal"
              data-type="default"
              class="mt-2"
            >
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
      <div class="flex mt-8 gap-8">
        <p class="text-xs text-gray-500">&copy; 2022 Abbex</p>
        <p class="text-xs text-gray-500">
          Сайт разработан
          <a href="https://croxware.com">croxware.com</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import SearchInput from "./SearchInput.vue";
import SubmitOrderModal from "@/components/modals/SubmitOrder.vue";
import PriceListButton from "./PriceListButton.vue";

export default {
  components: {
    SearchInput,
    PriceListButton,
  },
  methods: {
    sendRequest(form) {
      return this.$store.dispatch("clientRequests/send", form);
    },
    showSubmiteOrderModal() {
      this.$modal.show(SubmitOrderModal, { onSubmit: this.sendRequest });
    },
  },
};
</script>
