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
      d="M7 16.5v-9A1.5 1.5 0 0 1 8.5 6h1.89a2 2 0 0 0 1.11-.34l3.17-2.11A1.5 1.5 0 0 1 17 4.8V7m0 4v8.2a1.5 1.5 0 0 1-2.33 1.25l-3.17-2.11a2 2 0 0 0-1.11-.34H10M22 2 2 22"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VolumeSlash",
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
