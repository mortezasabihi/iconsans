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
      d="M11.47 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 19.12v-3.31a2 2 0 0 1 1.94-1.94H16m-.97 3.56L16.59 19l3.44-3.44"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "User-3-Tick",
  props: {
    width: {
      required: false,
      type: Number,
      default: () => 16,
    },
    height: {
      required: false,
      type: Number,
      default: () => 16,
    },
  },
});
</script>
