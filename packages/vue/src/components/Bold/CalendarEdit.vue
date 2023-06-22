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
      d="M20.92 8.75a4 4 0 0 0-3.25-3.92V3.25a.75.75 0 1 0-1.5 0v1.5h-7.5v-1.5a.75.75 0 0 0-1.5 0v1.5h-.25a4 4 0 0 0-4 4V9h18v-.25Zm-3.34 4.75a5 5 0 0 1 3.34 1.28V10.5h-18V18a4 4 0 0 0 4 4H14a5 5 0 0 1 3.58-8.5ZM7.92 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z"
    />
    <path
      fill="currentColor"
      d="M17.58 15a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.24 3.36-.42.42-1.58 1.59a.262.262 0 0 1-.19.07h-.73a.25.25 0 0 1-.26-.26v-.73a.26.26 0 0 1 .07-.19l1.59-1.58.42-.42h.07l1 1 .03.1Zm.63-.62-.28.27h-.07l-1-1v-.07l.27-.28a.27.27 0 0 1 .37 0l.74.74a.27.27 0 0 1-.03.34Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalendarEdit",
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
