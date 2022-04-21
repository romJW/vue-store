<template>
  <div>
    <div v-if="isLoading" :class="_class">
      <div class="z-50 absolute w-full h-full flex justify-center items-center bg-black opacity-30" />
      <div class="z-50 absolute w-full h-full flex justify-center items-center">
        <Spinner size="lg" />
      </div>
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script>
import Spinner from "./Spinner.vue"

export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    styles: {
      type: String,
      default: "",
    }
  },
  components: {
    Spinner,
  },
  computed: {
    _class() {
      return `${this.$props.styles} relative`
    }
  }
}
</script>
