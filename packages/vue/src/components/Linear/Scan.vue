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
      d="M9.33 20H7.56A3.57 3.57 0 0 1 4 16.44v-1.77m16 0v1.77A3.57 3.57 0 0 1 16.44 20h-1.77m0-16h1.77A3.57 3.57 0 0 1 20 7.56v1.77m-16 0V7.56A3.57 3.57 0 0 1 7.56 4h1.77M4 12h16"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Scan",
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
