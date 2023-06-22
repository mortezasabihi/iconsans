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
      d="M21.42 9.65 13 4a1.75 1.75 0 0 0-2 0L2.58 9.65a.75.75 0 0 0-.2 1 .74.74 0 0 0 1 .21l1-.7v7.07a3 3 0 0 0 3 3h1.7a.8.8 0 0 0 .8-.8v-4.2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.2a.8.8 0 0 0 .8.8h1.7a3 3 0 0 0 3-3v-7.07l1.11.74a.83.83 0 0 0 .51.1.74.74 0 0 0 .72-.885.75.75 0 0 0-.3-.465Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home1",
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
