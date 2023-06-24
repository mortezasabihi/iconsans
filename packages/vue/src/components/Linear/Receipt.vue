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
      d="M16 3.77v16.16a.3.3 0 0 1-.53.19l-1.94-2.39a.999.999 0 0 0-1.56 0l-1.69 2.09a.999.999 0 0 1-1.56 0L7 17.73a1 1 0 0 0-1.56 0l-1.91 2.39a.3.3 0 0 1-.53-.19V6.77a3 3 0 0 1 3-3h10Zm0 0h3a2 2 0 0 1 2 2V8a2 2 0 0 1-2 2h-3V3.77ZM7 8h5m-5 3h5m-5 3h5"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Receipt",
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
