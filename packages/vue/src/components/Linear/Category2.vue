<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M10.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm9 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm-9 9a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm9 0a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Category2",
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
