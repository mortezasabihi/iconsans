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
      d="m20.38 7.56-.06-.06a.43.43 0 0 0-.56.03l-10.29 11a.3.3 0 0 0 .22.51H19a2 2 0 0 0 2-2V9a2 2 0 0 0-.27-1 1.83 1.83 0 0 0-.35-.44Zm2.15-6.09a.75.75 0 0 0-1.06 0L15.94 7h-.44a.5.5 0 0 1-.5-.5V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5H5a2 2 0 0 0-2 2v8a2 2 0 0 0 1.14 1.8l-2.67 2.67a.75.75 0 0 0 1.06 1.06l20-20a.75.75 0 0 0 0-1.06ZM9.88 10.88a3 3 0 0 1 2.94-.76l.18.05L9.17 14a1.209 1.209 0 0 1-.05-.18 3 3 0 0 1 .76-2.94Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CameraSlash",
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
