<template>
  <Popper :options="options">
    <slot slot="content" />
      <fa-icon icon="fa-regular fa-circle-question "   slot="reference" class="material-icons text-blue-500 w-6 h-6 mb-1.5"/>
    
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
