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
      d="M10.5 7.5a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm7.5-3h-3A1.5 1.5 0 0 0 13.5 6v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 19.5 9V6A1.5 1.5 0 0 0 18 4.5Zm-9 9H6A1.5 1.5 0 0 0 4.5 15v3A1.5 1.5 0 0 0 6 19.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9 13.5Zm10.5 3a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Category5",
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
