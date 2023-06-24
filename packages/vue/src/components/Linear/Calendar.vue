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
      d="M17 4.75H7a4 4 0 0 0-4 4V18a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V8.75a4 4 0 0 0-4-4Zm-9-1.5v3m9-3v3M3 9.75h18"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 13.99V14m4-.01V14m4-.01V14m0 3.99V18m-4-.01V18m-4-.01V18"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Calendar",
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
