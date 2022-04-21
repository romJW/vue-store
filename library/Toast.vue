<template>
  <div
    :class="[
      'toast',
      {
        'mb-2': position.includes('top'),
        'mt-2': position.includes('bottom'),
      },
    ]"
    role="alert"
    :data-type="type"
    @click="$emit('remove')"
  >
    <!-- Loading bar -->
    <div
      class="absolute bg-white opacity-25 left-0 bottom-0 h-1"
      :style="{ width: percentageElapsed + '%' }"
    />

    <!-- Message -->
    <span class="font-semibold mr-2 text-left flex-1">{{ message }}</span>

    <!-- Icon -->
    <svg
      :class="[position]"
      class="block opacity-75 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#FFFFFF"
    >
      <path
        d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
      />
    </svg>
  </div>
</template>

<script>
import { defineToastComponent } from 'vue-my-toasts'

export default defineToastComponent({
  props: {
    badge: {
      type: [String, Boolean],
      required: false,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.toast {
  @apply relative overflow-hidden p-3 items-center text-indigo-100 leading-none rounded-lg flex lg:inline-flex cursor-pointer select-none w-full;
  @apply bg-blue-500;
  &[data-type="success"] {
    @apply bg-green-500;
  }
  &[data-type="base"] {
    @apply bg-blue-500;
  }
  &[data-type="warning"] {
    @apply bg-orange-500;
  }
  &[data-type="error"] {
    @apply bg-red-500;
  }
}

svg.bottom-middle {
  transform: rotate(90deg);
}

svg.top-middle {
  transform: rotate(-90deg);
}

svg.bottom-left {
  transform: rotate(180deg);
}

svg.top-left {
  transform: rotate(180deg);
}
</style>
