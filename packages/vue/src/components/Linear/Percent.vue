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
      d="M15.33 7 8.67 17"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.5"
      d="M15.3 17v.001M8.6 7v.001"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Percent",
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
