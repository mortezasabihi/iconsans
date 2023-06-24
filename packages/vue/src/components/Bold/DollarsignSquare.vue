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
      d="M10.67 8.08h.58v2.42l-.93-.7a.58.58 0 0 1-.24-.47v-.66a.6.6 0 0 1 .59-.59Zm2.08 5.42.93.7a.581.581 0 0 1 .24.47v.66a.59.59 0 0 1-.59.59h-.58V13.5Z"
    />
    <path
      fill="currentColor"
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-1.58 7a.75.75 0 1 1-1.5 0V8.67a.6.6 0 0 0-.59-.59h-.58v3.55L14.58 13a2.1 2.1 0 0 1 .84 1.67v.66a2.1 2.1 0 0 1-2.09 2.09h-.58V18a.75.75 0 1 1-1.5 0v-.58h-.58a2.1 2.1 0 0 1-2.09-2.09V14a.75.75 0 1 1 1.5 0v1.33a.59.59 0 0 0 .59.59h.58v-3.54L9.42 11a2.1 2.1 0 0 1-.84-1.67v-.66a2.1 2.1 0 0 1 2.09-2.09h.58V6a.75.75 0 1 1 1.5 0v.58h.58a2.1 2.1 0 0 1 2.09 2.09V10Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DollarsignSquare",
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
