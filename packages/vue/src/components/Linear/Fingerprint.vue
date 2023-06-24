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
      d="M9 5.33a6.2 6.2 0 0 1 10.13 4.79 14.15 14.15 0 0 1-4.07 10M4.88 12a1.85 1.85 0 0 0 1.85-1.86c0-.73.129-1.455.38-2.14M13 17.75A11.45 11.45 0 0 1 10 20"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M4.88 15.08a5 5 0 0 0 5-5 3.1 3.1 0 1 1 6.2 0A11.08 11.08 0 0 1 14.9 15"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M5.93 18.1a8 8 0 0 0 7-8"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Fingerprint",
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
