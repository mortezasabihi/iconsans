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
      d="m6 11.74 6.56-8.19a1 1 0 0 1 1.78.62V10a1 1 0 0 0 1 1h1.89a.999.999 0 0 1 .77 1.53l-5.5 7.87a1 1 0 0 1-1.82-.57v-5.46a1 1 0 0 0-1-1h-2.9A1 1 0 0 1 6 11.74Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Flash",
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
