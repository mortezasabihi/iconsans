<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="m18.69 9.19 1.4 1.4a2 2 0 0 1 0 2.82l-2.43 2.43A8 8 0 0 1 10.21 18M7.3 16.66a7.998 7.998 0 0 1-1-.82l-2.39-2.43a2 2 0 0 1 0-2.82l2.43-2.43a8 8 0 0 1 10.23-.92"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M10.11 13.63a2.5 2.5 0 0 1 3.56-3.49m7.22-7.07L2.93 21.03"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EyeSlash",
  props: {
    width: {
      required: false,
      type: [Number, String],
      default: () => "1em",
    },
    height: {
      required: false,
      type: [Number, String],
      default: () => "1em",
    },
  },
});
</script>
