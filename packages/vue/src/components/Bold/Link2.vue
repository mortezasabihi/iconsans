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
      d="M6.35 19.28a3.75 3.75 0 0 1-2.66-6.4l5.66-5.65a3.85 3.85 0 0 1 5.3 0 3.74 3.74 0 0 1 0 5.3l-2.12 2.12a.75.75 0 1 1-1.06-1.06l2.12-2.12a2.25 2.25 0 0 0 0-3.18 2.3 2.3 0 0 0-3.18 0l-5.66 5.65a2.25 2.25 0 0 0 2.56 3.62.763.763 0 0 1 .69 1.36 3.85 3.85 0 0 1-1.65.36Z"
    />
    <path
      fill="currentColor"
      d="M12 17.87a3.75 3.75 0 0 1-2.65-6.4l2.12-2.12a.75.75 0 1 1 1.06 1.06l-2.12 2.12a2.248 2.248 0 0 0-.057 3.237 2.249 2.249 0 0 0 3.237-.057l5.66-5.65a2.25 2.25 0 0 0-2.56-3.62.76.76 0 0 1-1-.36.75.75 0 0 1 .35-1 3.75 3.75 0 0 1 4.27 6l-5.66 5.65A3.74 3.74 0 0 1 12 17.87Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Link2",
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
