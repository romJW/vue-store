<template>
  <header
    class="shadow w-screen 2xl:w-full flex flex-col justify-center sticky top-[-1px] 2xl:sticky bg-white z-10"
  >
    <div
      id="header__container"
      class="mx-auto container flex flex-row items-center justify-between px-6 py-4 w-full gap-10"
    >
      <nuxt-link to="/">
        <img class="w-28 lg:w-40" src="@/assets/logo.png" />
      </nuxt-link>
      <div class="hidden 2xl:block w-1/6 text-center">
        <span class="text-gray-500">
          Строительство бассейнов в Казахстане “под ключ”
        </span>
      </div>
      <div class="hidden lg:block h-12 grow">
        <SearchInput />
      </div>
      <div class="hidden lg:flex h-12">
        <PriceListButton />
      </div>
      <div class="hidden lg:block">
        <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
        <br />
        <a href="tel:+7 (771) 741-18-44">+7 (771) 741-18-44</a>
      </div>
      <div class="hidden lg:flex flex-col items-center justify-center">
        <a href="mailto:info@abbex.kz">info@abbex.kz</a>
        <div class="flex gap-2">
          <a href="https://vk.com/abbex">
            <fa-icon icon="fa-brands fa-vk" :style="{ color: '#4267B2' }" />
          </a>
          <a href="https://www.instagram.com/abbex.kz/">
            <fa-icon
              icon="fa-brands fa-instagram-square"
              :style="{ color: '#4267B2' }"
            />
          </a>
          <a href="https://wa.me/+77717411822">
            <fa-icon
              icon="fa-brands fa-whatsapp-square"
              :style="{ color: '#4267B2' }"
            />
          </a>
          <fa-icon
            icon="fa-brands fa-odnoklassniki-square"
            :style="{ color: '#4267B2' }"
          />
        </div>
      </div>
      <div class="flex items-center lg:hidden" @click="toggleMobileMenu">
        <span class="flex items-center mr-2">Меню</span>
        <MenuIcon v-if="!isMobileMenuOpen" class="menu-icon" color="#4267B2" />
        <CloseIcon v-else class="menu-icon" color="#4267B2" />
      </div>
    </div>
    <div id="header__menu" class="hidden lg:flex bg-gray-800">
      <div class="container mx-auto flex">
        <Navigation :items="items" class="grow" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Button from "../library/Button.vue";
import MenuIcon from "./icons/Menu.vue";
import CloseIcon from "./icons/Close.vue";
import Navigation from "./Navigation.vue";
import Input from "../library/Input.vue";
import SearchInput from "./SearchInput.vue";

import Menu1 from "../assets/menu_1.jpg";
import Menu2 from "../assets/menu_2.jpg";
import Menu3 from "../assets/menu_3.jpg";
import Menu4 from "../assets/menu_4.jpg";
import Menu5 from "../assets/menu_5.jpg";
import Menu6 from "../assets/menu_6.jpg";
import Menu7 from "../assets/menu_7.jpg";
import Menu8 from "../assets/menu_8.jpg";
import Menu9 from "../assets/menu_9.jpg";
import Menu10 from "../assets/menu_10.jpg";
import Menu11 from "../assets/menu_11.jpg";
import Menu12 from "../assets/menu_12.jpg";
import Menu13 from "../assets/menu_13.jpg";

import PriceListButton from "./PriceListButton.vue";

export default {
  components: {
    MenuIcon,
    PriceListButton,
    Button,
    SearchInput,
    CloseIcon,
    Navigation,
    Input,
  },
  computed: mapState({
    isMobileMenuOpen: "isMobileMenuOpen",
  }),
  methods: {
    ...mapMutations(["toggleMobileMenu"]),
  },
  data() {
    return {
      items: [
        {
          title: "Блочно-пленочные  бассейны",
          path: "/#block-pellicle-pools",
        },
        {
          title: "SPA и сауны",
          children: [
            [
              {
                title: "SPA",
                path: "/catalog/spa",
                image: Menu3,
              },
              {
                title: "Сауны",
                path: "/catalog/sauny",
                image: Menu11,
              },
            ],
          ],
        },
        {
          title: "Оборудование",
          path: "/catalog/oborudovanie_dlya_bassejnov",
          children: [
            [
              {
                title: "Пленка для бассейна",
                path: "/catalog/plenka",
                image: Menu12,
              },
              {
                title: "Насосы",
                path: "/catalog/nasosy",
                image: Menu10,
              },
            ],
            [
              {
                title: "Фильтры",
                path: "/catalog/filters",
                image: Menu2,
              },
              {
                title: "Закладное оборудование",
                path: "/catalog/zakladnoe_oborudovanie",
                image: Menu9,
              },
            ],
            [
              {
                title: "Подогрев воды",
                path: "/catalog/podogrev_vody",
                image: Menu1,
              },
              {
                title: "Станции дозирования",
                path: "/catalog/stanciya_dozirovaniya",
                image: Menu7,
              },
            ],
            [
              {
                title: "УФ обеззара-живатель",
                path: "/catalog/ultrafioletoviy_obezorazhevatel",
                image: Menu5,
              },
              {
                title: "Освещение",
                path: "/catalog/osveshenie",
                image: Menu4,
              },
            ],
            [
              {
                title: "Лестницы",
                path: "/catalog/lestnicy",
                image: Menu8,
              },
              {
                title: "Трубы и фитинги",
                path: "/catalog/truby",
                image: Menu6,
              },
            ],
            /* [ */
            /*   { */
            /*     title: "Полипропиленовые листы", */
            /*     path: "/catalog/polypropylene", */
            /*     image: Menu13, */
            /*   }, */
            /* ], */
          ],
        },
        {
          title: "Павильоны для бассейнов",
          path: "/#pavilions",
        },
        {
          title: "Все для террас",
          path: "http://dpksklad.kz/",
          external: true,
        },
        {
          title: "Портфолио",
          path: "/page/portfolio",
        },
        {
          title: "Рассчитать стоимость",
          path: "/#calculator",
        },
      ],
    };
  },
};
</script>

<style scoped>
#header__menu {
  @apply p-2;
}

svg {
  width: 1.5rem !important;
  height: 1.5rem !important;
}

.menu-icon {
  width: 1.5rem !important;
  height: 1.5rem !important;
}
</style>
