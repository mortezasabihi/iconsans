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
      d="m15.64 13 2.82-1.63a1.08 1.08 0 0 0 0-1.88l-2.82-1.65a1.08 1.08 0 0 0-1.64.94V12a1.08 1.08 0 0 0 1.64 1ZM19 15.56H5a.75.75 0 1 0 0 1.5h14a.75.75 0 0 0 0-1.5Zm-14-2.5h6a.75.75 0 0 0 0-1.5H5a.75.75 0 1 0 0 1.5Zm0-4h6a.75.75 0 1 0 0-1.5H5a.75.75 0 0 0 0 1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Playlistup",
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
