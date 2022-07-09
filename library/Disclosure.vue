<template>
 <div class="card disclosure bg-white rounded-lg border border-gray-200 shadow-md p-4 flex flex-col">
  
    <slot name="header" :open="open" :toggle="toggle" />
    <slot name="open" v-if="open" :toggle="toggle" />
    <slot name="close" v-else :toggle="toggle" />
  </div>
</template>

<script>

export default {
  props: ['defaultOpen'],
  components: {
   
  },
  data() {
    return {
      open: true
    }
  },
  mounted() {
    this.open = this.$props.defaultOpen === 'true'
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
  },
}
</script>

<style scoped>
svg {
  @apply w-6 h-6;
}
</style>
