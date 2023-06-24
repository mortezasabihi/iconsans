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
      d="M12 10.88a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-7.5 7.94v-3a2 2 0 0 1 1.94-1.94h11.12a2 2 0 0 1 1.94 1.94v3a.291.291 0 0 1-.3.3H4.8a.29.29 0 0 1-.3-.3Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User3",
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
