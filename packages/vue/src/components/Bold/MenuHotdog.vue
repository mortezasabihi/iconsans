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
      d="M16 15.25H8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5Zm3-4H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5ZM8 8.75h8a.75.75 0 1 0 0-1.5H8a.75.75 0 0 0 0 1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuHotdog",
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
