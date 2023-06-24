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
      d="M18.18 10.08a6.18 6.18 0 1 0-12.36 0s-.35 2.84 3.69 8.71a3 3 0 0 0 5 0c4.02-5.87 3.67-8.71 3.67-8.71Zm-4.24.92a.74.74 0 0 1 0 1.06.75.75 0 0 1-.53.22.79.79 0 0 1-.53-.22l-.88-.93-.88.89a.79.79 0 0 1-.53.22.75.75 0 0 1-.53-.22.74.74 0 0 1 0-1.06l.88-.89-.88-.88a.75.75 0 0 1 1.06-1.06L12 9l.88-.88a.75.75 0 0 1 1.06 1.06l-.88.88.88.94Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ocationCross",
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
