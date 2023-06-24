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
      d="m20.65 13.06-1.78 1.78v2.53a1.5 1.5 0 0 1-1.5 1.5h-2.53l-1.78 1.78a1.49 1.49 0 0 1-2.12 0l-1.78-1.78H6.63a1.5 1.5 0 0 1-1.5-1.5v-2.53l-1.78-1.78a1.49 1.49 0 0 1 0-2.12l1.78-1.78V6.63a1.5 1.5 0 0 1 1.5-1.5h2.53l1.78-1.78a1.49 1.49 0 0 1 2.12 0l1.78 1.78h2.53a1.5 1.5 0 0 1 1.5 1.5v2.53l1.78 1.78a1.49 1.49 0 0 1 0 2.12Zm-9.4 3.44a.75.75 0 1 0 1.5 0v-6.3a.75.75 0 1 0-1.5 0v6.3Zm.75-10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Information",
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
