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
      d="M8.54 18.7a.19.19 0 0 0 0 .31 14.07 14.07 0 0 0 2.68 1.24 2 2 0 0 0 1.24 0c2-.68 8.34-3.39 8.38-11.14a5.2 5.2 0 0 0-.39-2 .21.21 0 0 0-.34-.06L8.54 18.7ZM20.91 3.22a.77.77 0 0 0-1.07 0l-1.51 1.52a4.12 4.12 0 0 0-1.71-.48 4.5 4.5 0 0 0-4.74 4.49 4.51 4.51 0 0 0-4.74-4.49 4.69 4.69 0 0 0-4.26 4.85A10.87 10.87 0 0 0 6 17l-2.66 2.72A.75.75 0 0 0 3.88 21a.74.74 0 0 0 .53-.22l16.5-16.5a.75.75 0 0 0 0-1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Heart",
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
