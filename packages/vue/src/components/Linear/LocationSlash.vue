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
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M7.86 16.14c-2.28-4.08-2-6.06-2-6.06a6.18 6.18 0 0 1 11.4-3.3m.92 3.3s.35 2.84-3.69 8.71a3.001 3.001 0 0 1-5 0"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M11.75 12.05a1.91 1.91 0 0 1-1.16-.57 2 2 0 0 1 2.82-2.82c.34.325.549.762.59 1.23M21 3 3 21"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LocationSlash",
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
