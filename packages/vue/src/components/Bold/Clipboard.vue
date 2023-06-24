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
      d="M16.3 4.26a.31.31 0 0 0-.32.29 2.49 2.49 0 0 1-2.48 2.2h-3A2.49 2.49 0 0 1 8 4.55a.31.31 0 0 0-.32-.29 3 3 0 0 0-2.7 3v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-11a3 3 0 0 0-2.68-3Z"
    />
    <path
      fill="currentColor"
      d="M10.5 5.75h3a1.5 1.5 0 0 0 0-3h-3a1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Clipboard",
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
