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
      d="M18 8.5h-3.17a2 2 0 0 1-1.42-.59l-1.82-1.82a2 2 0 0 0-1.42-.59H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Zm-3.9 4.36a.71.71 0 0 1-.53.22.74.74 0 0 1-.53-.22l-.29-.29V16a.75.75 0 1 1-1.5 0v-3.43l-.29.29a.75.75 0 0 1-1.06 0 .74.74 0 0 1 0-1.06l1.57-1.57a.81.81 0 0 1 .24-.17.83.83 0 0 1 .58 0c.09.041.171.1.24.17l1.57 1.57a.74.74 0 0 1 0 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FolderArrowUp",
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
