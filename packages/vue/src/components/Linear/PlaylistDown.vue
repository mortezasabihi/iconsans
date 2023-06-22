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
      d="m18.46 14.53-2.83 1.63a1.09 1.09 0 0 1-1.63-.94V12a1.09 1.09 0 0 1 1.63-1l2.83 1.63a1.09 1.09 0 0 1 0 1.9ZM19 7.69H5m6 4H5m6 4H5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlaylistDown",
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
