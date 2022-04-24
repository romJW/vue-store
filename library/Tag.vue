<template>
  <div
    class="shadow-md border rounded-md py-1 px-3 w-max text-xs"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>
