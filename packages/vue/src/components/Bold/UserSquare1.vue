<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      fill="currentColor"
      d="M17 2.25H7A4.75 4.75 0 0 0 2.25 7v10A4.75 4.75 0 0 0 7 21.75h10A4.75 4.75 0 0 0 21.75 17V7A4.75 4.75 0 0 0 17 2.25ZM20.25 17a3.25 3.25 0 0 1-2.5 3.15v-2.77a1.49 1.49 0 0 0-1.48-1.48H7.73a1.49 1.49 0 0 0-1.48 1.48v2.77A3.25 3.25 0 0 1 3.75 17V7A3.26 3.26 0 0 1 7 3.75h10A3.26 3.26 0 0 1 20.25 7v10Z"
    />
    <path
      fill="currentColor"
      d="M12 8a2.8 2.8 0 1 0 0 5.6A2.8 2.8 0 0 0 12 8Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserSquare1",
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
