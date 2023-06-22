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
      d="M9.25 11.73a.76.76 0 0 0 .75.75h5V16a5 5 0 1 1-10 0V8a5 5 0 1 1 10 0v3h-5a.76.76 0 0 0-.75.73Zm13.44.27a.779.779 0 0 1-.16.24l-3.6 3.6a.75.75 0 0 1-1.06-1.06l2.32-2.32H15V11h5.19l-2.32-2.34a.75.75 0 1 1 1.06-1.06l3.6 3.6a.729.729 0 0 1 .16.8Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogoutRounded",
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
