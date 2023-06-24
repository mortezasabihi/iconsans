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
      d="M12 2a3.52 3.52 0 0 0-3.5 3.5v5a3.51 3.51 0 0 0 1.5 2.87l.34.29L15.5 8.5v-3A3.5 3.5 0 0 0 12 2Zm1 6.75h-2a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5Zm0-3h-2a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5Z"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M12 17v5"
    />
    <path
      fill="currentColor"
      d="M18.5 9.75a.76.76 0 0 0-.75.75A5.76 5.76 0 0 1 12 16.25a6 6 0 0 1-1.33-.15.75.75 0 0 0-.9.55.77.77 0 0 0 .56.91 7.852 7.852 0 0 0 1.67.19 7.26 7.26 0 0 0 7.25-7.25.76.76 0 0 0-.75-.75Zm4.03-8.28a.75.75 0 0 0-1.06 0l-13.3 13.3a5.691 5.691 0 0 1-1.92-4.27.75.75 0 0 0-1.5 0 7.19 7.19 0 0 0 2.36 5.33l-5.64 5.64a.75.75 0 0 0 1.06 1.06l20-20a.75.75 0 0 0 0-1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MicrophoneSlash",
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
