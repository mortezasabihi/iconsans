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
      d="m8.88 14.17 6.49 3.75a2.5 2.5 0 0 0 3.75-2.17v-7.5a2.5 2.5 0 0 0-3.75-2.17L8.88 9.83a2.51 2.51 0 0 0 0 4.34Zm-4 4.58a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 1.5 0v12a.76.76 0 0 1-.75.75Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Previous",
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
