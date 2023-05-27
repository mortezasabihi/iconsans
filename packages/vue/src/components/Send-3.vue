<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5">
      <path
        d="m8.69 7.34 7.52 3.77a1 1 0 0 1 0 1.78l-7.52 3.77a1 1 0 0 1-1.35-1.34l1.44-2.87a1 1 0 0 0 0-.9L7.34 8.68a1 1 0 0 1 1.35-1.34Z"
      />
      <path stroke-linecap="round" d="M9 12h2" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Send-3",
  props: {
    width: {
      required: false,
      type: Number,
      default: () => 16,
    },
    height: {
      required: false,
      type: Number,
      default: () => 16,
    },
  },
});
</script>
