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
      d="m14.07 7.88-4-2.67a.2.2 0 0 0-.31.16v10.42a.41.41 0 0 0 .18.33l4 2.67a.2.2 0 0 0 .28-.06.2.2 0 0 0 .03-.1V8.21a.41.41 0 0 0-.18-.33ZM7.94 5.21l-4.49 3A1 1 0 0 0 3 9v8.59a1 1 0 0 0 1.55.83l3.52-2.34a.41.41 0 0 0 .18-.33V5.37a.2.2 0 0 0-.31-.16Zm11.51.33-3.52 2.34a.41.41 0 0 0-.18.33v10.42a.2.2 0 0 0 .31.16l4.49-3A1 1 0 0 0 21 15V6.37a1 1 0 0 0-1.55-.83Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Map",
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
