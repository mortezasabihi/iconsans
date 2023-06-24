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
      d="M15 3.42H9a3 3 0 0 0-3 3v13.16a1 1 0 0 0 1.55.84l4.45-3 4.45 3a1 1 0 0 0 1.55-.84V6.42a3 3 0 0 0-3-3ZM15.75 9a.75.75 0 1 1-1.5 0V7a.25.25 0 0 0-.25-.25h-2a.75.75 0 1 1 0-1.5h2A1.76 1.76 0 0 1 15.75 7v2Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Bookmark3",
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
