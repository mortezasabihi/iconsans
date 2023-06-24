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
      d="M9.88 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7.5 7.94v-3a2 2 0 0 1 1.94-1.94h11.13a2 2 0 0 1 1.93 1.94v3a.29.29 0 0 1-.3.3H2.68a.3.3 0 0 1-.3-.3Zm13.82-6.27a2.39 2.39 0 1 0 0-4.78 2.39 2.39 0 0 0 0 4.78Zm5.35 3.93v2.41a.24.24 0 0 1-.24.24h-2.15a.29.29 0 0 1-.3-.3v-3.59a.29.29 0 0 1 .3-.3H20a1.54 1.54 0 0 1 1.55 1.54Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Users3",
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
