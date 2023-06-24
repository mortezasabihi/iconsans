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
      d="M14.73 8.36h-9.5a2.52 2.52 0 0 0-2.52 2.52v6.27a2.52 2.52 0 0 0 2.52 2.52h9.5a2.52 2.52 0 0 0 2.52-2.52v-6.27a2.52 2.52 0 0 0-2.52-2.52Z"
    />
    <path
      stroke="currentColor"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M2.71 12.4h14.54"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M6.75 8V6.84a2.51 2.51 0 0 1 2.51-2.52h9.52a2.51 2.51 0 0 1 2.51 2.52v6.28a2.51 2.51 0 0 1-2.51 2.52h-1.53"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cards",
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
