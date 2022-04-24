<template>
  <Loading v-if="loading" />
  <div v-else class="container mx-auto flex justify-center">
    <div class="prose max-w-none w-full" v-html="page.content" />
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
  mounted() {
    this.$axios.get(`/items/static_pages/${this.$route.params.url}`)
      .then(data => {
        this.page = data.data.data
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
