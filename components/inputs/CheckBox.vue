<template>
  <div class="flex items-center gap-2">
    <input
      class="checkbox checkbox-primary checkbox-xs rounded-none border-black"
      type="checkbox"
      :checked="checked"
      :id="value"
      :value="value"
      :disabled="disabled"
      @change="onChange" />
    <label :for="value">{{ label }}</label>
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

