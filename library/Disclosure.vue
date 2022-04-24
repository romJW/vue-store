<template>
  <Card class="disclosure flex flex-col">
    <slot name="header" :open="open" :toggle="toggle" />
    <slot name="open" v-if="open" :toggle="toggle" />
    <slot name="close" v-else :toggle="toggle" />
  </Card>
</template>

<script>
import Card from './Card.vue'

export default {
  props: ['defaultOpen'],
  components: {
    Card,
  },
  data() {
    return {
      open: false
    }
  },
  mounted() {
    this.open = Boolean(this.$props.defaultOpen)
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
