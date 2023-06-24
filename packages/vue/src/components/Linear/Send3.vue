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
      d="m8.69 7.34 7.52 3.77a.999.999 0 0 1 0 1.78l-7.52 3.77a1 1 0 0 1-1.35-1.34l1.44-2.87a1 1 0 0 0 0-.9L7.34 8.68a1 1 0 0 1 1.35-1.34Z"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M9 12h2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Send3",
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
