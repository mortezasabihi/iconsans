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
      d="m20.65 10.94-1.78-1.78V6.64a1.5 1.5 0 0 0-1.5-1.5h-2.53l-1.78-1.79a1.51 1.51 0 0 0-2.12 0L9.16 5.14H6.63a1.5 1.5 0 0 0-1.5 1.5v2.52l-1.78 1.78a1.49 1.49 0 0 0 0 2.12l1.78 1.79v2.52a1.5 1.5 0 0 0 1.5 1.5h2.53l1.78 1.78a1.49 1.49 0 0 0 2.12 0l1.78-1.78h2.53a1.5 1.5 0 0 0 1.5-1.5v-2.52l1.78-1.79a1.49 1.49 0 0 0 0-2.12Zm-9.4-3.44a.75.75 0 1 1 1.5 0v6.3a.75.75 0 1 1-1.5 0V7.5Zm.75 10a1 1 0 1 1 0-2.002 1 1 0 0 1 0 2.002Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Alert1",
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
