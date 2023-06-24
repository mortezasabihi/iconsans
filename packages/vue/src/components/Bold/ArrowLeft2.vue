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
      d="M14.75 18.25a.741.741 0 0 1-.53-.22l-5.5-5.5a.75.75 0 0 1 0-1.06L14.22 6a.75.75 0 0 1 1.06 1l-5 5 5 5a.75.75 0 0 1 0 1.06.74.74 0 0 1-.53.19Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArrowLeft2",
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
