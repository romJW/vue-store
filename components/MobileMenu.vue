<template>
  <div class="flex flex-col p-4 gap-4 items-center">
    <div id="mobile-menu__items">
      <span class="hover:opacity-75" @click="navigate('/#polypropylene-pools')">
        Полипропиленовый бассейн
      </span>
      <hr>
      <span class="hover:opacity-75" @click="navigate('/#block-pellicle-pools')">
        Блочно-пленочные бассейны
      </span>
      <hr>
      <span class="hover:opacity-75" @click="navigate('/#pavilions')">
        Павильоны для бассейнов
      </span>
      <hr>
      <span class="flex justify-center items-center" @click="() => expanded == 'equipment' ? expanded = null : expanded = 'equipment'">
        Оборудование для бассейнов
        <span :class="{ 'rotate-180': expanded === 'equipment' }" class="material-icons">keyboard_arrow_up</span>
      </span>
      <div v-if="expanded == 'equipment'" class="flex flex-col gap-4 p-2">
        <span @click="navigate('/catalog/plenka')">
          Пленка для бассейна
        </span>
        <span @click="navigate('/catalog/nasosy')">
          Насосы
        </span>
        <span @click="navigate('/catalog/filters')">
          Фильтры
        </span>
        <span @click="navigate('/catalog/zakladnoe_oborudovanie')">
          Закладное оборудование
        </span>
        <span @click="navigate('/catalog/podogrev_vody')">
          Подогрев воды
        </span>
        <span @click="navigate('/catalog/stanciya_dozirovaniya')">
          Станции дозирования
        </span>
        <span @click="navigate('/catalog/ultrafioletoviy_obezorazhevatel')">
          УФ обеззара-живатель
        </span>
        <span @click="navigate('/catalog/osveshenie')">
          Освещение
        </span>
        <span @click="navigate('/catalog/lestnicy')">
          Лестницы
        </span>
        <span @click="navigate('/catalog/truby')">
          Трубы и фитинги
        </span>
        <span @click="navigate('/catalog/polypropylene')">
          Полипропиленовые листы
        </span>
      </div>
      <hr>
      <span class="flex justify-center items-center" @click="() => expanded == 'spa' ? expanded = null : expanded = 'spa'">
        SPA и сауны
        <span :class="{ 'rotate-180': expanded === 'spa' }" class="material-icons">keyboard_arrow_up</span>
      </span>
      <div v-if="expanded == 'spa'" class="flex flex-col gap-4 p-2">
        <span @click="navigate('/catalog/spa')">
          SPA
        </span>
        <span @click="navigate('/catalog/sauny')">
          Сауны
        </span>
      </div>
      <hr>
      <span>
        <a class="text-black" href="http://dpksklad.kz/">
          Все для террас
        </a>
      </span>
      <hr>
      <span @click="navigate('/page/portfolio')">
        Портфолио
      </span>
      <hr>
      <span class="hover:opacity-75" @click="navigate('/#calculator')">
        Рассчитать стоимость
      </span>
    </div>
    <div class="w-full">
      <SearchInput :onClick="toggleMobileMenu" class="w-full" />
    </div>
    <div>
      <PriceListButton />
    </div>
    <hr>
    <div class="flex flex-col font-bold text-lg">
      <a href="tel:+7 (771) 741-18-22">+7 (771) 741-18-22</a>
      <a href="tel:+7 (771) 741-18-44">+7 (771) 741-18-44</a>
    </div>
    <hr>
    <div>
      <a hrer="mailto:info@abbex.kz">info@abbex.kz</a>
    </div>
    <hr>
    <div class="flex gap-4">
      <a class="hover:opacity-75" href="https://vk.com/abbex" target="_blank" rel="noreferrer">
        <span class="sr-only"> VK </span>
        <VkLogoIcon class="w-8 h-8" color="#4267B2" />
      </a>

      <a class="hover:opacity-75" href="https://www.instagram.com/abbex.kz/" target="_blank" rel="noreferrer">
        <span class="sr-only"> Instagram </span>
        <InstagramLogoIcon class="w-8 h-8" color="#4267B2" />
      </a>

      <a class="hover:opacity-75" href="https://wa.me/+77717411822" target="_blank" rel="noreferrer">
        <span class="sr-only"> WhatsApp </span>
        <WhatsappLogoIcon class="w-8 h-8" color="#4267B2" />
      </a>

      <a class="hover:opacity-75" href="" target="_blank" rel="noreferrer">
        <span class="sr-only"> OK </span>
        <OkLogoIcon class="w-8 h-8" color="#4267B2" />
      </a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import InstagramLogoIcon from './icons/InstagramLogo.vue'
import OkLogoIcon from './icons/OkLogo.vue'
import WhatsappLogoIcon from './icons/WhatsappLogo.vue'
import VkLogoIcon from './icons/VkLogo.vue'
import SearchInput from './SearchInput.vue'
import Input from './inputs/Input.vue'
import PriceListButton from './PriceListButton.vue'

export default {
  components: {
    PriceListButton,
    InstagramLogoIcon,
    OkLogoIcon,
    WhatsappLogoIcon,
    VkLogoIcon,
    Input,
    SearchInput,
  },
  data() {
    return {
      expanded: null,
    }
  },
  computed: mapState({
    isMobileMenuOpen: 'isMobileMenuOpen',
  }),
  methods: {
    ...mapMutations([
      'toggleMobileMenu',
    ]),
    navigate (path) {
      this.toggleMobileMenu()
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss" scoped>

hr {
  width: 80px !important;
}

#mobile-menu__items {
  @apply flex flex-col items-center text-center;

  & > span {
    @apply font-bold text-base w-full;
  }

  hr {
    @apply my-2;
  }

}

.menu-icon {
  width: 1.5rem;
}
</style>
