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
      d="M8.9 4.5h-3A1.5 1.5 0 0 0 4.4 6v3a1.5 1.5 0 0 0 1.5 1.5h3A1.5 1.5 0 0 0 10.4 9V6a1.5 1.5 0 0 0-1.5-1.5Zm1.5 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Zm7.5-3h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5Zm-1.4-8.86L13.4 10h6.2l-3.1-5.36Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Category-4",
  props: {
    width: {
      required: false,
      type: Number,
      default: () => 16,
    },
    height: {
      required: false,
      type: Number,
      default: () => 16,
    },
  },
});
</script>
