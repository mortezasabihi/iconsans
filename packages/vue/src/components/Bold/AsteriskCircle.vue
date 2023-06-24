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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 9.75h-2.19l1.55 1.55a.75.75 0 0 1 0 1.06.79.79 0 0 1-.53.22.77.77 0 0 1-.53-.22l-1.55-1.55V16a.75.75 0 1 1-1.5 0v-2.19L9.7 15.36a.77.77 0 0 1-.53.22.79.79 0 0 1-.53-.22.75.75 0 0 1 0-1.06l1.55-1.55H8a.75.75 0 1 1 0-1.5h2.19L8.64 9.7A.75.75 0 0 1 9.7 8.64l1.55 1.55V8a.75.75 0 1 1 1.5 0v2.19l1.55-1.55a.75.75 0 0 1 1.06 1.06l-1.55 1.55H16a.75.75 0 1 1 0 1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AsteriskCircle",
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
