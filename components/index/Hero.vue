<template>
  <aside class="relative text-white bg-sky-900">
    <video
      class="absolute inset-0 object-cover w-full h-full brightness-80"
      src="@/assets/video/hero.mp4"
      autoplay
      poster
      muted
      loop
    >
      <img src="@/assets/hero.jpg" alt="" />
    </video>
    <div class="relative max-w-screen-xl px-4 py-24 lg:py-36 2xl:py-52 mx-auto sm:px-6 lg:px-8">
      <div class="flex flex-col max-w-3xl mx-auto text-center gap-8">
        <h1 class="mt-2 text-4xl font-bold text-white sm:text-6xl">
          Строительство бассейнов <br class="inline md:hidden lg:inline"> “под ключ” <br> по Алматы и Казахстану
        </h1>
        <div class="flex flex-col lg:flex-row justify-center gap-4">
          <Button type="default" @click="showSubmiteOrderModal" class="lg:w-1/2">
            Оставить заявку
          </Button>
          <Button @click="$router.push('/#calculator')" type="alternative" class="lg:w-1/2">
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { Button } from '@/library'

import SubmitOrderModal from '@/components/modals/SubmitOrder.vue'

export default {
  components: {
    Button,
  },
  methods: {
    sendRequest(form) {
      this.$store.dispatch('clientRequests/send', form)
    },
    showSubmiteOrderModal() {
      this.$modal.show(
        SubmitOrderModal,
        { onSubmit: this.sendRequest }
      )
    },
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
