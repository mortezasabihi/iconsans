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
      d="M7.75 11.73a.75.75 0 0 0 .75.75h5V18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v5h-5a.75.75 0 0 0-.75.73Zm13.44.27a.778.778 0 0 1-.16.24l-3.6 3.6a.75.75 0 0 1-1.06-1.06l2.32-2.32H13.5V11h5.19l-2.32-2.34a.75.75 0 1 1 1.06-1.06L21 11.2a.78.78 0 0 1 .16.24.729.729 0 0 1 .03.56Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logout",
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
