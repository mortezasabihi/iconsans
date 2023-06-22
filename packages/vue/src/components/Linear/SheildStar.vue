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
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m12.53 8.33.51 1a.58.58 0 0 0 .45.33l1.12.16a.6.6 0 0 1 .33 1l-.81.79a.592.592 0 0 0-.17.53l.19 1.12a.59.59 0 0 1-.86.63l-1-.53a.61.61 0 0 0-.56 0l-1 .53a.59.59 0 0 1-.86-.63l.13-1.08a.59.59 0 0 0-.17-.53l-.81-.79a.6.6 0 0 1 .33-1l1.12-.16a.58.58 0 0 0 .53-.35l.51-1a.59.59 0 0 1 1.02-.02Z"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="m13 20.52-1 .57-1-.57A14 14 0 0 1 4 8.39a2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L19 6.66a2 2 0 0 1 1 1.73 14 14 0 0 1-7 12.13Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SheildStar",
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
