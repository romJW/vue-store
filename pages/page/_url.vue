<template>
  <Loading v-if="loading" />
  <div v-else class="container mx-auto flex justify-center">
    <div class="prose max-w-none w-[60vw]" v-html="page.content" />
  </div>
</template>

<script>
import Loading from '@/library/Loading.vue'

export default {
  components: {
    Loading,
  },
  data() {
    return {
      loading: true,
      page: null
    }
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
          }
        ]
      }
    }
  },
  mounted() {
    this.$axios.get(`/directus/items/static_pages/${this.$route.params.url}`)
      .then(data => {
        this.page = data.data.data
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
