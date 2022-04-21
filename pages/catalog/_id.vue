<template>
  <Loading v-if="$apollo.loading" />
  <div v-else>
    <PageBanner
      :title="category.label"
      :routes="category.breadcrumbs"
    />
    <div class="container mx-auto flex flex-col p-8 gap-8">
      <div class="grid grid-cols-1 2xl:grid-cols-3 gap-4">
        <ProductCard
          class="!p-0 rounded-[0]"
          v-for="(item, index) in products"
          :key="index"
          :product="item"
        />
      </div>
      <div class="flex">
        <article class="prose max-w-none w-full" v-html="category.content" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import prepareProduct from '../../utils/products.js'
import gql from 'graphql-tag'
import MarkdownIt from 'markdown-it'

import PageBanner from '../../components/PageBanner.vue'
import Loading from '../../library/Loading.vue'
import ProductCard from '../../components/ProductCard.vue'

const md = new MarkdownIt()

export default {
  components: {
    PageBanner,
    Loading,
    ProductCard,
  },
  apollo: {
    category: {
      query: gql`
        query getCategory($id: ID!) {
          categories_by_id(id: $id) {
            id,
            label,
            content,
            products(filter: { status: { _eq: "published" } }) {
              id
              status
              label
              price
              model
              manufacturer
              preview {
                id
              }
              category {
                id
              }
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.category,
        }
      },
      update: data => {
        let _data = data.categories_by_id
        let content = md.render(_data.content)
        return {
          ..._data,
          breadcrumbs: [
            { label: _data.label, path: route.path }
          ],
          content
        }
      }
    },
  },
  computed: {
    products() {
      if (this.category.products) {
        return  _.map(category.products, prepareProduct)
      }
    }
  },
  methods: {
    addToCart (item) {
      this.$store.commit('cart/add', item)
    },
    removeFromCart (item) {
      this.$store.commit('cart/remove', item.id)
    },
    navigate (path) {
      this.$router.push(route.path + path)
    },
  }
}


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
