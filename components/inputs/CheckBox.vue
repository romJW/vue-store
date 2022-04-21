<template>
  <div class="flex items-center gap-2">
    <input
      class="text-blue-500 disabled:text-blue-400 cursor-pointer disabled:cursor-default"
      :checked="checked"
      type="checkbox"
      :id="index + value"
      :value="value"
      :disabled="disabled"
      @change="onChange" />
    <label :for="index + value">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: ["label", "value", 'checked', 'disabled'],
  methods: {
    onChange (event) {
      this.$emit("onChange", event.target.checked, event.target.value)
    }
  }
}
</script>
