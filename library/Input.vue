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
      @change="onChange"
      :min="$props.min"
      :placeholder="placeholder"
    />
    <slot name="after" />
  </div>
</template>

<script>
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
  methods: {
    onChange (event) {
      let value = event.target.value
      this.$emit("onChange", value)
    }
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

