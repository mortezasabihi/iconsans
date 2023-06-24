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
      d="M14.5 6.75h-11a.75.75 0 0 1 0-1.5h11a.75.75 0 1 1 0 1.5ZM19 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm1.5 4.75h-11a.75.75 0 1 1 0-1.5h11a.75.75 0 1 1 0 1.5ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm9.5 4.75h-11a.75.75 0 1 1 0-1.5h11a.75.75 0 1 1 0 1.5ZM19 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FilterHorizental",
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
