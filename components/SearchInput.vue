<template>
  <Input class="h-full" id="search" type="search" @onChange="v => search.value = v" placeholder="Я ищу...">
    <template v-slot:after>
      <button @click="onSearchClick" class="p-2 text-blue-500 rounded-full hover:bg-blue-700 hover:text-white active:text-white active:bg-blue-500" type="Button">
        <ion-icon class="w-6 h-6" name="search-outline"></ion-icon>
      </button>
    </template>
  </Input>
</template>

<script>
import Button from '../library/Button.vue'
import Input from '../library/Input.vue'

export default {
  props: ['onClick'],
  data() {
    return {
      search: {
        value: ""
      }
    }
  },
  methods: {
    onSearchClick() {
      if (this.props.onClick) this.props.onClick()
      this.$router.push(`/search/${this.search.value}`)
    }
  }
}
</script>

