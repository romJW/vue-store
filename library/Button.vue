<template>
  <button
    :data-type="type"
    :data-size="size"
    :disabled="isLoading"
    @click="$emit('click')"
  >
    <Spinner v-if="isLoading" :size="size" />
    <slot />
  </button>
</template>

<script>
import Spinner from './Spinner.vue'

export default {
  components: {
    Spinner
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
    size: {
      type: String,
      default: 'sm',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
button {
  @apply flex justify-center items-center text-center font-medium rounded-lg;
  &[data-size="sm"] {
    @apply text-sm px-5 py-2.5;
  }
  &[data-size="lg"] {
    @apply text-lg px-10 py-5;
  }
  &[data-type="default"] {
    @apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300;
    @apply dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800;
  }
  &[data-type="alternative"] {
    @apply text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700;
    @apply dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700;
  }
  &[data-type="light"] {
    @apply bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300;
    @apply dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800;
  }
}
</style>
