<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path
        stroke-width="1.5"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-2-5.38L14.4 8"
      />
      <path stroke-width="2" d="M14.2 15.31v.001m-4-7.001v.001" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Percent-Circle",
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
