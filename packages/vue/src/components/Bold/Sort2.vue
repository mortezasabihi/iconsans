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
      d="M19 15.25H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm-14-2.5h8a.75.75 0 1 0 0-1.5H5a.75.75 0 1 0 0 1.5Zm0-4h8a.75.75 0 1 0 0-1.5H5a.75.75 0 0 0 0 1.5Zm11.47 4.78a.778.778 0 0 0 .53.22.78.78 0 0 0 .53-.22l1.8-1.8a.75.75 0 0 0-1.06-1.06l-.52.52V8a.75.75 0 1 0-1.5 0v3.19l-.52-.52a.75.75 0 1 0-1.06 1.06l1.8 1.8Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sort2",
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
