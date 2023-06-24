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
      d="m9.4 16.29 6-6a1.52 1.52 0 0 0 0-2.13 1.51 1.51 0 0 0-2.12 0l-6 6a3 3 0 0 0 2.12 5.127 3 3 0 0 0 2.12-.877l6-6a4.5 4.5 0 0 0-3.185-7.683A4.52 4.52 0 0 0 11.15 6.04l-6 6"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Attachment",
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
