<template>
  <div :class="_class">
    <label v-if="label" class="sr-only" :for="id">
      {{ label }}
    </label>
    <slot name="before" />
    <input
      :id="id"
      :class="`${$props.inputClass} p-0 border-0 focus:border-0 w-full`"
      :type="type"
      :value="value"
      :required="required"
      v-imask="mask"
      @change="onChange"
      @accept="onAccept"
      @complete="onComplete"
      :min="$props.min"
      :placeholder="placeholder"
    />
    <slot name="after" />
  </div>
</template>

<script>
import { IMaskDirective } from 'vue-imask';

export default {
  props: {
    id: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    styles: {
      type: String,
    },
    inputClass: {
      type: String,
    },
    type: {
      type: String,
      default: 'text',
    },
    mask: {
      type: Object,
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    min: {
      type: String,
    }
  },
  directives: {
    imask: IMaskDirective
  },
  methods: {
    onChange (event) {
      let value = event.target.value
      this.$emit("onChange", value)
    },
    onAccept (e) {
      const maskRef = e.detail;
      this.$emit("onAccept", maskRef.value)
    },
    onComplete (e) {
      const maskRef = e.detail;
      this.$emit("onComplete", maskRef.unmaskedValue)
    },
  },
  computed: {
    _class() {
      return `${this.$props.styles} relative flex justify-center items-center py-2 px-4 gap-2 text-sm border-2 border-gray-200 rounded-lg`
    }
  }
}
</script>

<style scoped>
input {
  outline: none;
  border: none;
}
input:focus {
  box-shadow: none;
}
</style>

