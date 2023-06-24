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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-1.16 11.89a.87.87 0 0 1-.86.87H8.24a.87.87 0 0 1-.86-.87V9.11a.87.87 0 0 1 .86-.87H10a.87.87 0 0 1 .86.87l-.02 5.78Zm5.79 0a.87.87 0 0 1-.87.87H14a.87.87 0 0 1-.86-.87V9.11a.87.87 0 0 1 .86-.87h1.74a.87.87 0 0 1 .87.87l.02 5.78Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PauseCircle",
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
