<template>
  <Loading v-if="$apollo.loading" />
  <div v-else>
    <PageBanner
      :title="category.label"
      :routes="breadcrumbs"
    />
    <div class="container mx-auto flex flex-col p-8 gap-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        <ProductCard
          class="!p-0 rounded-[0]"
          v-for="(item, index) in category.products"
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
import prepareProduct from '@/utils/products.js'
import gql from 'graphql-tag'
import MarkdownIt from 'markdown-it'

import PageBanner from '@/components/PageBanner.vue'
import Loading from '@/library/Loading.vue'
import ProductCard from '@/components/ProductCard.vue'

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
      update({ categories_by_id }) {
        return {
          ...categories_by_id,
          products: _.map(categories_by_id.products, prepareProduct),
          content: md.render(categories_by_id.content)
        }
      }
    },
  },
  computed: {
    breadcrumbs() {
      if (this.category) {
        return [{ label: this.category.label, path: this.$route.path }]
      }
    },
  },
  methods: {
    addToCart (item) {
      this.$store.commit('cart/add', item)
    },
    removeFromCart (item) {
      this.$store.commit('cart/remove', item.id)
    },
    navigate (path) {
      this.$router.push(this.$route.path + path)
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
