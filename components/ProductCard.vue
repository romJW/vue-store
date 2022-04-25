<template>
  <Card class="flex flex-col">
    <nuxt-link :to="href">
      <img
        class="cursor-pointer w-full"
        :src="product.preview.id"
        alt="product image"
        onerror="this.src='https://via.placeholder.com/100'"
      />
    </nuxt-link>
    <div class="px-5 pt-5">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900">
        {{ product.name }}
      </h5>
    </div>
    <div class="px-5 pb-5 w-full mt-auto">
      <div class="mt-2.5"></div>
      <div class="flex flex-col md:flex-row justify-between md:items-center">
        <span class="text-xl font-bold text-gray-900">
          {{ product.price }} тенге
        </span>
        <button class="mt-4 md:mt-0" data-type="default" @click="$store.getters['cart/isInCart'](product) ? removeFromCart() : addToCart()">
          {{ $store.getters['cart/isInCart'](product) ? 'Добавлено' : 'В корзину' }}
        </button>
      </div>
    </div>
  </Card>
</template>

<script>
import { Card } from '../library'
import Loading from '../library/Loading.vue'

export default {
  props: ['product'],
  components: {
    Card,
    Loading,
  },
  computed: {
    href() {
      return `/catalog/${this.$props.product.category.id}/${this.$props.product.id}`
    }
  },
  methods: {
    addToCart () {
      this.$store.commit('cart/add', this.$props.product)
    },
    removeFromCart () {
      this.$store.commit('cart/remove', this.$props.product.id)
    },
  }
}
</script>
