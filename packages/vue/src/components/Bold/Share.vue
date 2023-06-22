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
      d="M18.25 14.64a2.56 2.56 0 0 0-3 .58l-5.34-2.58c.11-.42.11-.86 0-1.28l5.35-2.58a2.57 2.57 0 1 0-.65-1.35l-5.49 2.65a2.57 2.57 0 1 0 0 3.84l5.49 2.65a2.56 2.56 0 1 0 3.64-1.93Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Share",
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
