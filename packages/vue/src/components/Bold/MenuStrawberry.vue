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
      d="M15 15.25H9a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Zm2-4H7a.75.75 0 1 0 0 1.5h10a.75.75 0 1 0 0-1.5Zm2-4H5a.75.75 0 0 0 0 1.5h14a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuStrawberry",
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
