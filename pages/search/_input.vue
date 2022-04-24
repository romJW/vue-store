<template>
  <Loading v-if="$apollo.loading" />
  <div v-else>
    <PageBanner
      title="Поиск"
      :routes="breadcrumbs"
    />
    <div class="container mx-auto flex flex-col p-8 gap-8">
      <div v-if="products.length" class="grid grid-cols-1 2xl:grid-cols-4 gap-4">
        <ProductCard
          class="!p-0 rounded-[0]"
          v-for="(item, index) in products"
          :key="index"
          :product="item"
        />
      </div>
      <div class="flex justify-center items-center min-h-[500px] text-center" v-else>
        <span class="text-3xl font-bold text-gray-400">Похожего товара не найдено</span>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import gql from 'graphql-tag'

import PageBanner from '@/components/PageBanner.vue'
import Loading from '@/library/Loading.vue'
import ProductCard from '@/components/ProductCard.vue'
import prepareProduct from '@/utils/products.js'

export default {
  components: {
    PageBanner,
    Loading,
    ProductCard,
  },
  apollo: {
    products: {
      query: gql`
        query searchProducts ($input: String) {
          products(search: $input, filter: { status: { _eq: "published" } }) {
            id
            label
            price
            model
            manufacturer
            category {
              id
            }
            preview {
              id
            }
          }
        }
      `,
      variables() {
        return {
          input: this.$route.params.input,
        }
      },
      update: data => _.map(data.products, prepareProduct)
    },
  },
  computed: {
    breadcrumbs() {
      return [{ label: this.$route.params.input, path: this.$route.path }]
    }
  },
  methods: {
    addToCart (event, id) {
      event.stopPropagation()
      alert(id)
    },
    navigate ({ category, id }) {
      this.$router.push(`/catalog/${category.id}/${id}`)
    }
  },
}
/* watch(route, ({ params, path }, _) => { */
/*   breadcrumbs[0] = { label: params.input, path } */
/* }) */
</script>

<style lang="scss">
.catalog-item {
  @apply p-4 border cursor-pointer;
  &:hover {
    @apply shadow-lg;
    img {
      @apply brightness-125
    }
  }
}
</style>
