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
      d="M15.45 8h3a.12.12 0 0 0 .09-.21l-4.09-4.12a.13.13 0 0 0-.21.09v3A1.22 1.22 0 0 0 15.45 8Z"
    />
    <path
      fill="currentColor"
      d="M14.64 9.51a1.89 1.89 0 0 1-1.89-1.89V3.51h-1.88a2.62 2.62 0 0 0-2.62 2.62v8.75a2.62 2.62 0 0 0 2.62 2.63h5.25a2.63 2.63 0 0 0 2.63-2.63V9.51h-4.11Zm-3.33 2h2.63a.75.75 0 1 1 0 1.5h-2.63a.75.75 0 1 1 0-1.5Zm4.38 4.12h-4.38a.75.75 0 1 1 0-1.5h4.38a.75.75 0 1 1 0 1.5Z"
    />
    <path
      fill="currentColor"
      d="M6.62 16V6.84a2.59 2.59 0 0 0-1.37 2.29v8.75a2.63 2.63 0 0 0 2.62 2.63h5.25a2.62 2.62 0 0 0 2.31-1.38H9.72A3.091 3.091 0 0 1 6.62 16Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocumentTextDuplicate",
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
