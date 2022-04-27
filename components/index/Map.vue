<template>
  <div class="relative">
    <Card class="!hidden md:!flex flex-col absolute z-10 bg-white justify-center p-4 2xl:p-10 gap-4 top-10 left-10 2xl:left-80">
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
        <span @click="showSubmiteOrderModal" class="cursor-pointer italic text-sky-700 underline">
          Заказать обратный звонок
        </span>
      </div>
    </Card>
    <div class="md:hidden flex flex-col justify-center p-4 gap-4">
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
        <span @click="showSubmiteOrderModal" class="cursor-pointer italic text-sky-700 underline">
          Заказать обратный звонок
        </span>
      </div>
    </div>
    <iframe src="https://yandex.com/map-widget/v1/-/CCUBJQD8xB" id="map-wrap" width="100%" height="500" frameborder="0" allowfullscreen="true" style="position:relative;"></iframe>
  </div>
</template>

<script>
import { Card } from '@/library'

import SubmitOrderModal from '@/components/modals/SubmitOrder.vue'

export default {
  components: {
    Card,
  },
  methods: {
    sendRequest(form) {
      return this.store.dispatch('clientRequests/send', form)
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
