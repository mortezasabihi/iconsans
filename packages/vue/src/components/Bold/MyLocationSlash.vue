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
      d="M22 11.25h-2.3a7.838 7.838 0 0 0-.27-1.46.76.76 0 0 0-.54-.52.75.75 0 0 0-.71.2l-8.71 8.71a.75.75 0 0 0-.2.71.76.76 0 0 0 .52.54c.477.136.966.226 1.46.27V22a.75.75 0 1 0 1.5 0v-2.29a7.74 7.74 0 0 0 7-7H22a.75.75 0 1 0 0-1.5v.04Zm-.47-8.78a.75.75 0 0 0-1.06 0L16.9 6a7.53 7.53 0 0 0-4.15-1.75V2a.75.75 0 1 0-1.5 0v2.29a7.74 7.74 0 0 0-7 7H2a.75.75 0 1 0 0 1.5h2.29A7.53 7.53 0 0 0 6 16.9l-3.53 3.57a.75.75 0 0 0 1.06 1.06l18-18a.75.75 0 0 0 0-1.06Zm-11.24 7.82a2.41 2.41 0 0 1 2.8-.44l-3.24 3.24a2.41 2.41 0 0 1 .44-2.8Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyLocationSlash",
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
