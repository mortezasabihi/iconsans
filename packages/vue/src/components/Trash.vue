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
      d="m6 9.13.75 9a2 2 0 0 0 2 2h6.5a2 2 0 0 0 2-2l.75-9m-4.5 3.5v4.49m-3-4.49v4.49M5 6.88h14m-4.5 0v-2a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Trash",
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
