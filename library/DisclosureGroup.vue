<template>
  <slot :open="open" :setOpen="setOpen"></slot>
</template>

<script>
import Disclosure from './Disclosure.vue'

export default {
  components: {
    Disclosure,
  },
  data() {
    return {
      open: null,
    }
  },
  methods: {
    setOpen(value) {
      this.open = value
    }
  }
}
</script>
