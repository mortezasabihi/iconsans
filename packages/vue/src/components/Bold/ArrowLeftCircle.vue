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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm5 9.75H8.81l1.72 1.72a.75.75 0 0 1-1.06 1.06l-3-3a.56.56 0 0 1-.16-.24.72.72 0 0 1 0-.58.63.63 0 0 1 .16-.24l3-3a.75.75 0 0 1 1.06 1.06l-1.72 1.72H17a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowLeftCircle",
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
