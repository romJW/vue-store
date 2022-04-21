<template>
  <Card class="collapsable flex flex-col !p-0">
    <div class="flex justify-between p-4 cursor-pointer" @click="toggle">
      <slot name="header" :isOpen="isOpen"></slot>
      <ion-icon :class="isOpen ? '' : 'rotate-180'" name="chevron-up-outline"></ion-icon>
    </div>
    <slot
      name="body"
      :isOpen="isOpen"
      :toggle="toggle"
      classes="px-4 pb-4"
    />
  </Card>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card,
  },
  props: ['isOpen'],
  methods: {
    toggle () {
      this.$emit("onToggle")
      if (this.isOpen) {
        this.$emit("onClose")
      } else {
        this.$emit("onOpen")
      }
    }
  }
}
</script>

<style scoped>
svg {
  @apply w-6 h-6;
}
</style>
