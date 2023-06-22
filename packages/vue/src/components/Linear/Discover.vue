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
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m8.55 6.91 7.79-1.84a2.14 2.14 0 0 1 2.59 2.59l-1.84 7.79a2.24 2.24 0 0 1-1.64 1.64l-7.79 1.84a2.14 2.14 0 0 1-2.59-2.59l1.84-7.79a2.24 2.24 0 0 1 1.64-1.64Z"
    />
    <path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Discover",
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
