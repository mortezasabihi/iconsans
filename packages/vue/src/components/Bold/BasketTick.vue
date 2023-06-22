<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      fill="currentColor"
      d="M18.87 11.13H5.13a.28.28 0 0 0-.27.33L6 18.09a2.08 2.08 0 0 0 2 1.74h8a2.08 2.08 0 0 0 2-1.74l1.11-6.63a.28.28 0 0 0-.24-.33Zm-3.67 2.52-3.67 3.66a.73.73 0 0 1-.53.22.739.739 0 0 1-.53-.22L8.8 15.64a.75.75 0 1 1 1.06-1.06L11 15.72l3.14-3.13a.738.738 0 0 1 1.06 0 .75.75 0 0 1 0 1.06Zm2.42-6.36h-.83l-.13-.2-1.75-2.61a.7.7 0 0 0-1.16.78l1.35 2H8.9l1.35-2a.7.7 0 0 0-1.16-.78L7.28 7.19l-.07.1h-.83A1.88 1.88 0 0 0 4.53 9.5a.28.28 0 0 0 .27.23h14.4a.28.28 0 0 0 .27-.23 1.88 1.88 0 0 0-1.85-2.21Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasketTick",
  props: {
    width: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
    height: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
  },
});
</script>
