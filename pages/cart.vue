<template>
  <div>
    <PageBanner
      title="Корзина"
      :routes="breadcrumbs"
    />
    <div class="container section flex flex-col mx-auto min-h-[500px]">
      <div class="flex flex-col-reverse lg:flex-row gap-4 grow">
        <div class="basis-8/12 flex flex-col divide-y-2">
          <div v-if="$store.getters['cart/length']">
            <li v-for="product in products" :key="product.id" class="flex py-6">
              <div @click="openProductPage(product)" class="cursor-pointer h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img :src="product.preview.id" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
              </div>
              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div class="flex flex-col md:flex-row justify-between text-base font-medium text-gray-900">
                    <h3>
                      <div>{{ product.label }}</div>
                      <span v-if="product.manufacturer">
                        {{ product.manufacturer + ' ' }}
                      </span>
                      <span v-if="product.model">
                        {{ product.model }}
                      </span>
                    </h3>
                    <div class="flex flex-col mt-2 md:mt-0 md:items-end">
                      <p class="text-md font-bold">{{ product.price * product.order.amount }} тенге</p>
                      <p class="text-sm font-thin text-gray-500">{{ product.price }} тенге</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-1 mt-2 md:mt-0 md:items-end justify-between text-sm">
                  <div class="flex justify-center items-center gap-2">
                    <ion-icon
                      name="remove-outline"
                      class="w-4 h-4 text-blue-500 cursor-pointer"
                      @click="updateAmount(product, product.order.amount - 1)"
                    />
                    <input
                      min="1"
                      class="w-[30px] text-center"
                      @change="event => updateAmount(product, event.target.value)"
                      :value="product.order.amount"
                    />
                    <ion-icon
                      name="add-outline"
                      class="w-4 h-4 text-blue-500 cursor-pointer"
                      @click="updateAmount(product, product.order.amount + 1)"
                    />
                  </div>
                  <div class="flex">
                    <Button type="none" class="border border-red-500" @click="() => $store.commit('cart/remove', product.id)">
                      <ion-icon
                        name="close-outline"
                        class="w-4 h-4 text-red-500"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          </div>
          <div v-else class="flex justify-center items-center grow">
            <span class="text-gray-400 text-2xl">На данный момент товары в корзине отсутсвуют</span>
          </div>
        </div>
        <div class="basis-4/12 flex flex-col gap-4">
          <Button
            @click="showSubmiteOrderModal"
            class="w-full"
            type="default">
            Перейти к оформлению
          </Button>
          <Card class="flex rounded-xl p-4">
            <div>Итого: </div>
            <div class="ml-auto">
              <span class="font-bold">{{ totalCost }}</span> тенге
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import _ from 'lodash'

import { Card }       from '@/library'
import Input      from '@/library/Input.vue'
import Button     from '@/library/Button.vue'
import PageBanner from '@/components/PageBanner.vue'
import SubmitOrderModal from '@/components/modals/SubmitOrder.vue'

export default {
  components: {
    Card,
    Input,
    Button,
    PageBanner,
  },
  data() {
    return {
      form: {
        name: "",
        phone: "",
      },
    }
  },
  computed: {
    ...mapState({
      products: state => state.cart.list,
    }),
    breadcrumbs() {
      return [{ label: "Корзина", path: this.$route.path }]
    },
    totalCost() {
      return _.reduce(
        this.$store.state.cart.list,
        (acc, item) => acc += item.price * item.order.amount,
        0
      )
    }
  },
  methods: {
    updateAmount(item, value) {
      if (value <= 0) return
      this.$store.commit('cart/update', { id: item.id, update: { order: { amount: value }}})
    },
    openProductPage ({ category, id }) {
      this.$router.push(`/catalog/${category.id}/${id}`)
    },
    sendRequest (form) {
      const orederItems = _.reduce(
        this.$store.state.cart.list,
        (result, value, key) => {
          if (value) {
            return _.concat(result, _.join([
                `#${value.id} - ${value.name}`,
                `Колличиство: ${value.order.amount}`,
                `Стоимость:   ${value.order.amount * value.price}`,
                ' '
              ], '\n')
            )
          }
        },
        []
      )
      const content = _.join(orederItems, '\n')
      return this.$store.dispatch('clientRequests/send', { ...form, content })
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
