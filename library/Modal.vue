<template>
  <div :open="isOpen" as="div" @close="onClose">
    <div class="fixed z-50 inset-0 overflow-y-auto">
      <div class="flex justify-center items-center min-h-screen text-center">
        <div class="fixed inset-0 bg-black opacity-30" />
        <LoadingOverlay :isLoading="isLoading">
          <Card :class="_class">
            <div as="h3" class="text-lg font-medium leading-6 text-gray-900">
              <slot name="title" />
            </div>
            <div>
              <slot name="description" />
            </div>
            <slot name="body" />
          </Card>
        </LoadingOverlay>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import LoadingOverlay from './LoadingOverlay.vue'

export default {
  props: ['styles', 'onClose', 'isOpen', 'isLoading'],
  components: {
    Card,
    LoadingOverlay,
  },
  computed: {
    _class() {
      return `${this.$props.styles} p-6 overflow-hidden transition-all transform`
    }
  }
}
</script>
