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
      d="M7 17a14 14 0 0 1-3-8.7 2 2 0 0 1 1-1.73l6.08-3.51a1.83 1.83 0 0 1 1.84 0L18 6m2 2.3a14 14 0 0 1-7 12.12L12 21l-1-.58a13.891 13.891 0 0 1-1.62-1.09M21 3 3 21"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SheildSlash",
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
