<template>
  <div class="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      @change="onChange"
      :checked="checked"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: ["name", "value", "id", "label", "checked"],
  methods: {
    onChange (event) {
      let value = event.target.value
      this.$emit("onChange", value)
    }
  }
}
</script>
