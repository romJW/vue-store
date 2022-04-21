<template>
  <input
    class="basic"
    :type="type"
    :value="value"
    @change="onChange"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    type: {
      default: 'text',
      type: String,
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    }
  },
  methods: {
    onChange (event) {
      let value = event.target.value
      this.$emit("change", value)
    }
  }
}
</script>
