<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-linejoin="round">
      <path
        stroke-width="1.5"
        d="m3.35 13.06 1.78 1.78v2.53a1.5 1.5 0 0 0 1.5 1.5h2.53l1.78 1.78a1.49 1.49 0 0 0 2.12 0l1.78-1.78h2.53a1.5 1.5 0 0 0 1.5-1.5v-2.53l1.78-1.78a1.49 1.49 0 0 0 0-2.12l-1.78-1.78V6.63a1.5 1.5 0 0 0-1.5-1.5h-2.53l-1.78-1.78a1.49 1.49 0 0 0-2.12 0L9.16 5.13H6.63a1.5 1.5 0 0 0-1.5 1.5v2.53l-1.78 1.78a1.49 1.49 0 0 0 0 2.12Z"
      />
      <path stroke-linecap="round" stroke-width="1.5" d="M12 17v-7" />
      <path stroke-linecap="round" stroke-width="2" d="M12 7v.001" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Information",
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
