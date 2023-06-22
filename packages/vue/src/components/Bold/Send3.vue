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
      d="m16.22 12.89-7.54 3.77a1 1 0 0 1-1.34-1.34l1-2a1 1 0 0 1 .89-.55H11a.728.728 0 0 0 .75-.75.76.76 0 0 0-.75-.75H9.24a1 1 0 0 1-.89-.55l-1-2a1 1 0 0 1 1.33-1.38l7.54 3.77a1 1 0 0 1 0 1.78Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Send3",
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
