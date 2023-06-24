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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-.5 9.94a.75.75 0 1 1 0 1.5h-2.06v2.06a.75.75 0 1 1-1.5 0v-2.06h-1.88v2.06a.75.75 0 1 1-1.5 0v-2.06H7.5a.75.75 0 1 1 0-1.5h2.06v-1.88H7.5a.75.75 0 1 1 0-1.5h2.06V7.5a.75.75 0 0 1 1.5 0v2.06h1.88V7.5a.75.75 0 1 1 1.5 0v2.06h2.06a.75.75 0 1 1 0 1.5h-2.06v1.88h2.06Z"
    />
    <path fill="currentColor" d="M12.93 11.06h-1.87v1.88h1.87v-1.88Z" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumberSignSquare",
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
