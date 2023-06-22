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
      d="M21 12.5v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h5v5.19l-2.34-2.32a.75.75 0 0 0-1.06 0 .74.74 0 0 0 0 1.06L11.2 17a.7.7 0 0 0 .24.17.93.93 0 0 0 .29.05.87.87 0 0 0 .27-.02.74.74 0 0 0 .25-.17l3.6-3.6a.75.75 0 1 0-1.06-1.06l-2.32 2.32V9.5H18a3 3 0 0 1 3 3Zm-8.52-8v5H11v-5a.75.75 0 1 1 1.5 0h-.02Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginVertical",
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
