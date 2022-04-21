<template>
  <div class="page-banner">
    <div class="container mx-auto flex flex-col p-8 2xl:p-14 gap-8 text-white">
      <div class="text-4xl font-bold text-center">
        <span>{{ title }}</span>
      </div>
    </div>
    <div class="breadcrumb-container">
      <div class="flex justify-between text-white px-4 2xl:px-20 py-2 container mx-auto">
        <Breadcrumb class="hidden md:inline-flex" :items="routes" />
        <router-link to="/cart" class="flex ml-auto items-center cursor-pointer text-white">
          <ion-icon class="w-4 h-4 mr-2" name="cart-outline"></ion-icon>
          Корзина
          ({{ $store.getters['cart/length'] }})
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from './icons/Arrow.vue'
import Breadcrumb from './cw/Breadcrumb.vue'

export default {
  props: ['title', 'routes']
}
</script>

<style lang="scss" scoped>
.page-banner {
  background-image: url(../assets/catalog_1.jpeg);
  background-size: cover;
}

.breadcrumb-container {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
