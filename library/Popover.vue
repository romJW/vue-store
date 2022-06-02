<template>
  <div @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <slot/>
    <span v-if="isHovered" class="absolute shadow-md z-50 bg-white p-4 max-w-md">
      <slot name="content"/>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false
    }
  }
}
</script>
