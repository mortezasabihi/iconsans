<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      fill="currentColor"
      d="M18.46 12.65 15.64 11A1.08 1.08 0 0 0 14 12v3.26a1.08 1.08 0 0 0 1.63.94l2.82-1.63a1.08 1.08 0 0 0 .01-1.92ZM19 6.94H5a.75.75 0 0 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm-8 4H5a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Zm0 4H5a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Z"
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
