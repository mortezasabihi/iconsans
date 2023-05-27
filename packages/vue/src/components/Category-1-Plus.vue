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
      d="M9 4.5H6A1.5 1.5 0 0 0 4.5 6v3A1.5 1.5 0 0 0 6 10.5h3A1.5 1.5 0 0 0 10.5 9V6A1.5 1.5 0 0 0 9 4.5Zm0 9H6A1.5 1.5 0 0 0 4.5 15v3A1.5 1.5 0 0 0 6 19.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 9 13.5Zm9 0h-3a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5ZM14 8h5m-2.5-2.5v5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Category-1-Plus",
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
