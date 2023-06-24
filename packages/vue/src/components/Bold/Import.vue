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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-2.72 7.78-5.79 5.79h2.43a.75.75 0 1 1 0 1.5H6.68a.93.93 0 0 1-.29-.07.76.76 0 0 1-.4-.41.72.72 0 0 1-.06-.29v-4.22a.75.75 0 1 1 1.5 0v2.43l5.79-5.79a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Import",
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
