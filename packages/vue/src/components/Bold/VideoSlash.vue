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
      d="M21.8 4.13a.71.71 0 0 0-1 0l-4.39 4.4v-.18a3.5 3.5 0 0 0-3.49-3.49H5.49A3.49 3.49 0 0 0 2 8.35v7.44a3.49 3.49 0 0 0 3.49 3.49h.17l-1.6 1.6a.71.71 0 0 0 0 1 .74.74 0 0 0 .5.2.7.7 0 0 0 .49-.2L21.8 5.12a.71.71 0 0 0 0-.99Zm-.23 3.57a.71.71 0 0 0-.76.16L10.58 18.09a.7.7 0 0 0 .49 1.19h1.86a3.5 3.5 0 0 0 3.49-3.49v-.36l2.48 2.48a1.81 1.81 0 0 0 3.1-1.28V8.35a.71.71 0 0 0-.43-.65Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoSlash",
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
