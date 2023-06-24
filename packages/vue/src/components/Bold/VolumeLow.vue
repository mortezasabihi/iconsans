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
      d="M13 3.55 9.79 5.66A2 2 0 0 1 8.68 6H6.79a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h1.89a2 2 0 0 1 1.11.34L13 20.45a1.499 1.499 0 0 0 2.33-1.25V4.8A1.5 1.5 0 0 0 13 3.55Zm5.21 5.64a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06 2.741 2.741 0 0 1 0 3.89.75.75 0 0 0 0 1.06.79.79 0 0 0 .53.22.75.75 0 0 0 .53-.22 4.25 4.25 0 0 0 0-6.01Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VolumeLow",
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
