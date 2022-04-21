<template>
  <div>
    <Loading v-if="state.loading" />
    <div v-else class="container mx-auto flex justify-center">
      <div class="prose max-w-none w-full" v-html="state.page.content" />
    </div>
  </div>
</template>

<script>
import Loading from '../library/Loading.vue'

import api from '../utils/api.js'

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
    api.get(`/items/static_pages/${route.params.url}`)
      .then(data => {
        this.page = data
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
