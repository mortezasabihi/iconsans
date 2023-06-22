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
      d="M9.25 19.18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.38-12.61A2.249 2.249 0 0 0 19 5.82H7.15a2.28 2.28 0 0 0-1.88-1H3.54a.75.75 0 0 0 0 1.5h1.73A.75.75 0 0 1 6 7l.73 7.3a2.25 2.25 0 0 0 2.24 2h9.3a2.25 2.25 0 0 0 2.24-2l.66-6a2.249 2.249 0 0 0-.54-1.73Zm-3.41 3.17-3.91 3.91a.73.73 0 0 1-.53.22.74.74 0 0 1-.53-.22l-1.78-1.78a.75.75 0 0 1 1.06-1.06l1.25 1.25 3.38-3.38a.75.75 0 0 1 1.06 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CartTick",
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
