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
      d="M16 9V7a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1a2 2 0 0 0 .8 1.6l6.4 4.8A2 2 0 0 1 16 16v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2m4-12v18"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Dollarsign",
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
