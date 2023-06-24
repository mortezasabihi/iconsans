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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18ZM7.3 13.68h-.18a.75.75 0 0 1-.72-.58 5.54 5.54 0 0 1 1.49-5.21 5.61 5.61 0 0 1 7-.72.73.73 0 0 1 .72-.64.75.75 0 0 1 .75.75V8.8a.74.74 0 0 1-.75.75h-1.49a.75.75 0 0 1-.75-.75.76.76 0 0 1 .31-.59 4.08 4.08 0 0 0-5.82 4.57.76.76 0 0 1-.56.9Zm8.81 2.42a5.57 5.57 0 0 1-3.95 1.64 5.63 5.63 0 0 1-3.08-.92.73.73 0 0 1-.73.64.75.75 0 0 1-.75-.75v-1.52a.76.76 0 0 1 .75-.75h1.53a.76.76 0 0 1 .75.75.73.73 0 0 1-.31.59 4.07 4.07 0 0 0 4.73-.78 4 4 0 0 0 1.09-3.82.75.75 0 0 1 .56-.9.739.739 0 0 1 .9.56 5.54 5.54 0 0 1-1.49 5.26Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Refresh",
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
