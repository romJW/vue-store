<template>
  <div>
    <Vendor />
    <MobileMenu class="mt-[100px] 2xl:mt-0" v-if="isMobileMenuOpen" />
    <div class="mt-[100px] 2xl:mt-0" v-else>
      <Nuxt />
      <Footer />
      <a
        class="2xl:hidden bg-white rounded-full fixed z-50 bottom-6 right-6 cursor-pointer"
        href="https://wa.me/+77717411822"
        target="_blank"
        rel="noreferrer"
      >
        <WhatsappLogoIcon
          class="w-14 h-14"
          color="#00e676"
        />
      </a>
    </div>
  </div>
</template>

<script>
import '../assets/index.scss'
import '../assets/cw.scss'
import { mapMutations, mapState } from 'vuex'

import Vendor from '../components/Vendor.vue'
import Footer from '../components/Footer.vue'
import MobileMenu from '../components/MobileMenu.vue'
import WhatsappLogoIcon from '../components/icons/WhatsappLogo.vue'

export default {
  components: {
    Vendor,
    Footer,
    MobileMenu,
    WhatsappLogoIcon
  },
  computed: mapState({
    isMobileMenuOpen: 'isMobileMenuOpen',
  }),
  methods: {
    ...mapMutations({
      toggleMobileMenu: 'toggleMobileMenu',
      cartSetup: 'cart/setup',
    }),
  },
  mounted() {
    this.cartSetup()
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}
</style>
