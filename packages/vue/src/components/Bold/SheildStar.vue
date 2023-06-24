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
      d="m19 6.66-6.08-3.51a1.83 1.83 0 0 0-1.84 0L5 6.66a2 2 0 0 0-1 1.73 14 14 0 0 0 7 12.13l.5.29a1 1 0 0 0 1 0l.5-.29a14 14 0 0 0 7-12.13 2 2 0 0 0-1-1.73Zm-4.06 4.2-.81.79a.59.59 0 0 0-.17.53l.19 1.12a.59.59 0 0 1-.86.63l-1-.53a.61.61 0 0 0-.56 0l-1 .53a.59.59 0 0 1-.86-.63l.13-1.12a.59.59 0 0 0-.17-.53l-.81-.79a.6.6 0 0 1 .33-1l1.12-.16a.58.58 0 0 0 .53-.35l.51-1a.59.59 0 0 1 1.06 0l.51 1a.58.58 0 0 0 .45.33l1.12.16a.6.6 0 0 1 .29 1.02Z"
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
