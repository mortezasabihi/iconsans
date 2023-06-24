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
      d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-.84 14.16a.74.74 0 0 1-.46.69.74.74 0 0 1-.82-.16L7.23 15a.75.75 0 1 1 1.06-1l1.37 1.38V6.84a.75.75 0 0 1 1.5 0v10.32ZM16.77 10a.74.74 0 0 1-1.06 0l-1.37-1.35v8.51a.75.75 0 1 1-1.5 0V6.84a.75.75 0 0 1 1.28-.53L16.77 9a.74.74 0 0 1 0 1Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TransferHorizentalSquare1",
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
