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
        d="M19 8.77a7.511 7.511 0 0 1-9.19 9.93.94.94 0 0 0-.64 0L6.67 20a.44.44 0 0 1-.62-.51l.53-2.14a.92.92 0 0 0-.21-.81A7.51 7.51 0 0 1 10.79 4.1a7.46 7.46 0 0 1 2.21 0"
      />
      <path stroke-width="2" d="M9 11.5v.001m3-.001v.001m3-.001v.001" />
      <path
        stroke-width="1.5"
        d="M16.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Message-New-2",
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
