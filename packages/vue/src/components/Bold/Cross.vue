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
      d="m13.06 12 3-3A.753.753 0 1 0 15 7.93l-3 3-3-3A.757.757 0 0 0 7.93 9l3 3-3 3a.75.75 0 0 0 0 1.06.79.79 0 0 0 .821.17.75.75 0 0 0 .25-.16l3-3 3 3c.14.14.33.22.53.22a.79.79 0 0 0 .53-.22.75.75 0 0 0 0-1.06l-3-3.01Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cross",
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
