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
      d="M17.71 13.78a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.5 0L5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.218 4.218 0 0 0 6 0L20 17.53A1.049 1.049 0 0 0 20 16l-2.29-2.22Zm3.64-10.31a.75.75 0 0 0-1.06 0l-3.47 3.47-1.29-1.29a.74.74 0 0 0-1.06 0 .75.75 0 0 0 0 1.06l1.82 1.82a.74.74 0 0 0 .53.22.73.73 0 0 0 .53-.22l4-4a.75.75 0 0 0 0-1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallTick",
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
