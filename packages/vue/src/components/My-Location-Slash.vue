<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    >
      <path
        d="M18.71 10A7 7 0 0 1 10 18.71M7 16.9A7 7 0 0 1 16.9 7M12 5V2m0 20v-3m7-7h3M2 12h3"
      />
      <path d="M10.59 13.41a2 2 0 0 1 2.82-2.82M21 3 3 21" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "My-Location-Slash",
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
