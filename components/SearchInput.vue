<template>
  <Input class="h-full" id="search" type="search" @onChange="v => search.value = v" placeholder="Я ищу...">
    <template v-slot:after>
      <button @click="onSearchClick" class="p-2 flex text-blue-500 rounded-full hover:bg-blue-700 hover:text-white active:text-white active:bg-blue-500" type="Button">
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="w-6 h-6" />
      </button>
    </template>
  </Input>
</template>

<script>
import { Input, Button } from '@/library'

export default {
  props: ['onClick'],
  components: {
    Input,
    Button
  },
  data() {
    return {
      search: {
        value: ""
      }
    }
  },
  methods: {
    onSearchClick() {
      if (this.$props.onClick) this.$props.onClick()
      this.$router.push(`/search/${this.search.value}`)
    }
  }
}
</script>

