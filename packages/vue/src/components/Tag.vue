<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
    >
      <path
        d="m12.11 4.82-7.29 7.29a2 2 0 0 0 0 2.83l4.24 4.24a2 2 0 0 0 2.83 0l7.29-7.29a2 2 0 0 0 .58-1.64l-.43-3.82a2 2 0 0 0-1.76-1.76l-3.82-.43a2 2 0 0 0-1.64.58Z"
      />
      <path d="M14.72 11.28a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Tag",
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
