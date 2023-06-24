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
      d="M10.03 9.94a2.74 2.74 0 1 0 0-5.48 2.74 2.74 0 0 0 0 5.48Zm5.08 2.75H4.94a1.77 1.77 0 0 0-1.77 1.77v3.32c0 .977.792 1.77 1.77 1.77h10.17a1.77 1.77 0 0 0 1.77-1.77v-3.32a1.77 1.77 0 0 0-1.77-1.77ZM14.6 4.8a2.4 2.4 0 0 1 0 4.8m3.4 1.65a1.66 1.66 0 0 1 1.65 1.65V17"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Users2",
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
