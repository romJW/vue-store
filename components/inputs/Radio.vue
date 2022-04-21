<template>
  <div>
    <div class="flex items-center gap-2" v-for="(value, key) in items" :key="key">
      <RadioInput
        :id="index + key"
        :value="key"
        :name="name"
        :label="value"
        @onChange="onChange"
      />
    </div>
  </div>
</template>

<script>
import RadioInput from './RadioInput.vue'

export default {
  components: {
    RadioInput
  },
  props: ["name", "items"],
  methods: {
    onChange (value) {
      this.$emit("onChange", value)
    }
  }
}
</script>
