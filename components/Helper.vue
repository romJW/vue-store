<template>
  <Popper :options="options">
    <slot slot="content" />
    <span slot="reference" class="material-icons text-blue-500">
      help_outline
    </span>
  </Popper>
</template>

<script>
import Popper from '@/library/Popper'

export default {
  props: ['boundariesSelector'],
  components: {
    Popper,
  },
  data() {
    return {
      options: {
        placement: 'top',
        modifiers: [
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['left'],
            },
          },
        ],
        /* modifiers: [ */
        /*   { */
        /*     name: 'preventOverflow', */
        /*     options: { */
        /*     }, */
        /*   }, */
        /* ], */
      }
    }
  }
}
</script>
