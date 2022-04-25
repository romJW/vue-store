<template>
  <div>
    <Loading v-if="$apollo.loading" />
    <div v-else>
      <PageBanner
        :title="product.name"
        :routes="breadcrumbs"
      />
      <section class="section">
        <div class="container lg:px-0 mx-auto">
          <div class="mx-auto flex flex-wrap">
            <div class="lg:w-1/2 lg:h-auto w-full" >
              <Swiper v-if="product.images.length" :items="product.images" v-viewer />
              <img v-else :src="product.preview.id" class="rounded" v-viewer />
            </div>
            <div class="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">Название модели</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {{ product.name }}
              </h1>
              <div class="flex mb-4">
              </div>
              <p v-if="product.deal_info" v-html="product.deal_info" class="prose max-w-none">
              </p>
              <hr class="my-4"/>
              <!--
              <div class="flex flex-col md:flex-row mt-6 md:items-center pb-5 border-b-2 border-gray-100 mb-5 gap-6">
                <div class="flex">
                  <span class="mr-3 flex justify-center items-center">Color</span>
                  <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div class="flex items-center">
                  <span class="mr-3">Size</span>
                  <div class="">
                    <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                  </div>
                </div>
              </div>
              -->
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  {{ product.price }} KZT
                </span>
                <button @click="addToCart" data-type="default" class="flex ml-auto">
                  {{ $store.getters['cart/isInCart'](product) ? 'Добавлено' : 'В корзину' }}
                </button>
              </div>
            </div>
          </div>
          <div class="pt-5">
            <p v-if="product.description" v-html="product.description" class="prose max-w-none" />
            <p v-else class="leading-relaxed text-gray-400 min-h-[200px] flex justify-center items-center">
              Описание товара отсутствует
            </p>
            <hr class="my-4"/>
            <div class="flex">
              <span class="title-font font-medium text-2xl text-gray-900">
                {{ product.price }} KZT
              </span>
              <button @click="addToCart" data-type="default" class="flex ml-auto">
                {{ $store.getters['cart/isInCart'](product) ? 'Добавлено' : 'В корзину' }}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import MarkdownIt from 'markdown-it'
import gql from 'graphql-tag'

import Loading from '@/library/Loading.vue'
import PageBanner from '@/components/PageBanner.vue'

import prepareProduct from '@/utils/products.js'

const md = new MarkdownIt()

export default {
  components: {
    PageBanner,
    Loading,
  },
  apollo: {
    product: {
      query: gql`
        query getProduct($id: Float!) {
          products(filter: { status: { _eq: "published" }, id: { _eq: $id} }) {
            id
            label
            price
            model
            manufacturer
            description
            preview {
              id
            }
            images {
              directus_files_id {
                id
              }
            }
            category {
              id
              label
            }
          }
          settings {
            deal_info
          }
        }
      `,
      variables() {
        return {
          id: parseFloat(this.$route.params.product_id)
        }
      },
      update: data => {
        const product = prepareProduct(_.head(data.products))
        return {
          ...product,
          images: _.map(e => _.get(e, "directus_files_id.id"), product.images),
          description: md.render(product.description),
          deal_info: md.render(data.settings.deal_info),
        }
      },
    },
  },
  computed: {
    breadcrumbs () {
      if (this.product) {
        let path = this.$route.path.split('/')
        path.pop()
        return [
          { label: this.product.category.label, path: path.join('/') },
          { label: this.product.name, path: this.$route.path }
        ]
      }
    },
  },
  methods: {
    addToCart() {
      this.$store.commit('cart/add', product)
    },
  }
}
</script>

<style lang="scss" scoped>
.page-banner {
  background-size: cover;
}
</style>
