<template>
  <div>
    <Loading v-if="$apollo.loading" />
    <div v-else-if="product">
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
              <span v-if="product.deal_info" class="prose max-w-none">
                <span v-html="product.deal_info" />
              </span>
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
          <div class="pt-5">
            <span v-if="product.description" class="prose max-w-none">
              <span v-html="product.description" />
            </span>
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
            seo_title
            seo_description
            seo_tags
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
        if (product.description) {
          product.description = md.render(product.description)
        }
        return {
          ...product,
          deal_info: md.render(data.settings.deal_info),
        }
      },
    },
  },
  head() {
    if (this.product) {
      return {
        title: this.product.seo_title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.product.seo_description,
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.product.seo_tags,
          },
        ]
      }
    }
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
