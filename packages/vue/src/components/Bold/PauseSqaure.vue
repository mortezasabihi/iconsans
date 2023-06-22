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
      d="M17 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4Zm-6.16 11.89a.87.87 0 0 1-.86.87H8.24a.87.87 0 0 1-.87-.87V9.11a.87.87 0 0 1 .87-.87H10a.87.87 0 0 1 .86.87l-.02 5.78Zm5.78 0a.87.87 0 0 1-.86.87H14a.87.87 0 0 1-.86-.87V9.11a.87.87 0 0 1 .86-.87h1.74a.87.87 0 0 1 .86.87l.02 5.78Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PauseSqaure",
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
