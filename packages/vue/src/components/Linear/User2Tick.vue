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
      d="M11.5 9.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm3 10.5H5.94A1.94 1.94 0 0 1 4 18.31v-3.62a1.94 1.94 0 0 1 1.94-1.94h8.56m.5 3.12 1.57 1.56L20 14"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User2Tick",
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
