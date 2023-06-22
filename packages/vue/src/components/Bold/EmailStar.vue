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
      d="M18.6 4H5.4A3.41 3.41 0 0 0 2 7.4v9.2A3.41 3.41 0 0 0 5.4 20h7.06a.29.29 0 0 0 .28-.39 5.249 5.249 0 0 1-.24-1.38 5.5 5.5 0 0 1 9-4.45.29.29 0 0 0 .48-.24V7.4A3.41 3.41 0 0 0 18.6 4Zm-.19 5.63-4.84 3.17a2.67 2.67 0 0 1-1.56.49 2.79 2.79 0 0 1-1.61-.51L5.59 9.63a.752.752 0 1 1 .82-1.26l4.84 3.17a1.26 1.26 0 0 0 1.48 0l4.86-3.19a.752.752 0 0 1 .82 1.26v.02Z"
    />
    <path
      fill="currentColor"
      d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm2.3 3.89-.64.62a.45.45 0 0 0-.13.41l.15.88a.47.47 0 0 1-.68.49l-.78-.42a.49.49 0 0 0-.44 0l-.78.42a.47.47 0 0 1-.68-.49l.15-.88a.45.45 0 0 0-.13-.41l-.64-.62a.46.46 0 0 1 .3-.79l.88-.13a.48.48 0 0 0 .35-.25l.39-.8a.47.47 0 0 1 .84 0l.39.8a.481.481 0 0 0 .35.25l.88.13a.46.46 0 0 1 .22.79Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailStar",
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
