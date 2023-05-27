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
        d="m10.27 5-6.9 12a2 2 0 0 0 1.73 3h13.8a2 2 0 0 0 1.73-3l-6.9-12a2 2 0 0 0-3.46 0ZM12 8v6"
      />
      <path stroke-width="2" d="M12 17v.001" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Alert-2",
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
