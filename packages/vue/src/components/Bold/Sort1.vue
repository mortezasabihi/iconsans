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
      d="M19 15.25H5a.75.75 0 1 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm0-4h-8a.75.75 0 1 0 0 1.5h8a.75.75 0 1 0 0-1.5Zm-8-2.5h8a.75.75 0 1 0 0-1.5h-8a.75.75 0 1 0 0 1.5Zm-4.73 4.78a.779.779 0 0 0 .53.22.749.749 0 0 0 .53-.22l1.8-1.8a.75.75 0 1 0-1.06-1.06l-.52.52V8a.75.75 0 0 0-1.5 0v3.19l-.52-.52a.75.75 0 1 0-1.06 1.06l1.8 1.8Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sort1",
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
