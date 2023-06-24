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
      d="M2.66 16.2v-9a1.5 1.5 0 0 1 1.5-1.5h1.9a2 2 0 0 0 1.1-.33l3.17-2.11a1.5 1.5 0 0 1 2.33 1.24v14.4a1.5 1.5 0 0 1-2.33 1.25L7.16 18a2 2 0 0 0-1.1-.34h-1.9a1.5 1.5 0 0 1-1.5-1.46Zm18.68-4h-5.66"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VolumeMinus",
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
