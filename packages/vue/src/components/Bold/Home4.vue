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
      d="M21.42 9.65 13 4a1.75 1.75 0 0 0-2 0L2.58 9.65a.753.753 0 1 0 .84 1.25l1.08-.72v7.09a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-7.09l1.08.72a.81.81 0 0 0 .42.1.73.73 0 0 0 .725-.88.75.75 0 0 0-.305-.47ZM12 18.38a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home4",
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
