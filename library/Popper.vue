<template>
  <span class="flex">
    <span
      v-show="isShown"
      class="popper"
      ref="popper"
    >
      <slot name="content" />
    </span>
    <slot name="reference" />
  </span>
</template>

<script>
import { createPopper } from '@popperjs/core';

export default {
  props: ['options'],
  data() {
    return {
      instance: null,
      popper: null,
      reference: null,
      isShown: false
    }
  },
  mounted() {
    this.popper = this.$refs.popper
    this.reference = this.$slots.reference[0].elm
    this.instance = createPopper(
      this.reference,
      this.popper,
      this.$props.options
    );

    const show = () => {
      // Make the tooltip visible
      this.popper.setAttribute('data-show', '');

      // Enable the event listeners
      this.instance.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: true },
        ],
      }));

      // Update its position
      this.instance.update();
    }

    const hide = () => {
      // Hide the tooltip
      this.popper.removeAttribute('data-show');

      // Disable the event listeners
      this.instance.setOptions((options) => ({
        ...options,
        modifiers: [
          ...options.modifiers,
          { name: 'eventListeners', enabled: false },
        ],
      }));
    }

    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach((event) => {
      this.reference.addEventListener(event, show);
    });

    hideEvents.forEach((event) => {
      this.reference.addEventListener(event, hide);
    });
  }
}
</script>

<style>
.popper {
  @apply p-4 shadow-md max-w-md bg-white text-sm;
  width: auto;
  text-align: center;
  display: none;
  position: absolute;
  z-index: 200000;
}

.popper[data-show] {
  display: block !important;
}

.popper[data-popper-placement^='top'] > #arrow {
  bottom: -4px;
}

.popper[data-popper-placement^='bottom'] > #arrow {
  top: -4px;
}

.popper[data-popper-placement^='left'] > #arrow {
  right: -4px;
}

.popper[data-popper-placement^='right'] > #arrow {
  left: -4px;
}
</style>
