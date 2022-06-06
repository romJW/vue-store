<template>
  <popper
    trigger="hover"
    :options="{
      placement: 'top',
    }">
    <div class="popper">
      <slot />
    </div>
    <span slot="reference" class="material-icons text-blue-500">
      help_outline
    </span>
  </popper>
</template>
