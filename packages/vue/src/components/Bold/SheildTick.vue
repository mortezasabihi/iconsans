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
      d="m19 6.66-6.08-3.51a1.83 1.83 0 0 0-1.84 0L5 6.66a2 2 0 0 0-1 1.73 14 14 0 0 0 7 12.13l.5.29a1 1 0 0 0 1 0l.5-.29a14 14 0 0 0 7-12.13 2 2 0 0 0-1-1.73Zm-2.47 2.87-4.81 4.81a.77.77 0 0 1-.53.22.79.79 0 0 1-.53-.22l-2.19-2.19a.75.75 0 0 1 0-1.06.741.741 0 0 1 1.06 0l1.66 1.66 4.28-4.28a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SheildTick",
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
