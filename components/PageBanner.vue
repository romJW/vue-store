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
        <router-link to="/cart" class="text-sm flex ml-auto items-center cursor-pointer text-gray-400 hover:text-white">
          <fa-icon icon="fa-solid fa-cart-shopping" />
          Корзина
          ({{ $store.getters['cart/length'] }})
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/library/Breadcrumb.vue'

export default {
  props: ['title', 'routes'],
  components: {
    Breadcrumb
  }
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
