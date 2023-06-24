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
      d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm-.75-4.5a.75.75 0 1 0 1.5 0v-6.3a.75.75 0 1 0-1.5 0v6.3Zm.75-10a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfrmationCircle",
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
