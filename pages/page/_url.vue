<template>
  <Loading v-if="$apollo.loading" />
  <div v-else class="container mx-auto flex justify-center">
    <div class="prose max-w-none w-[60vw]" v-html="page.content" />
  </div>
</template>

<script>
import _ from 'lodash'
import gql from 'graphql-tag'
import Loading from '@/library/Loading.vue'

export default {
  components: {
    Loading,
  },
  apollo: {
    page: {
      query: gql`
        query getStaticPage($id: String!) {
          static_pages(filter: { id: { _eq: $id} }) {
            id
            content
            seo_title
            seo_description
            seo_tags
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.url
        }
      },
      update: data => {
        return _.head(data.static_pages)
      },
    },
  },
  head() {
    if (this.page) {
      return {
        title: this.page.seo_title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.page.seo_description,
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.page.seo_tags,
          },
        ]
      }
    }
  },
}
</script>
