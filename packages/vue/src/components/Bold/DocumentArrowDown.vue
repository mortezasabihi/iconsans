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
      d="M13.22 10.76a2 2 0 0 1-2-2V4H9a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3v-6.24h-4.78ZM14.1 16l-1.57 1.58a.779.779 0 0 1-.53.22.779.779 0 0 1-.53-.22L9.9 16a.74.74 0 0 1 0-1.06.75.75 0 0 1 1.06 0l.29.3V13a.75.75 0 1 1 1.5 0v2.2l.29-.3a.75.75 0 0 1 1.06 0 .74.74 0 0 1 0 1.1Z"
    />
    <path
      fill="currentColor"
      d="M13.93 9.25h3.81a.11.11 0 0 0 .08-.2L13 4.18a.12.12 0 0 0-.2.09v3.81a1.17 1.17 0 0 0 1.13 1.17Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocumentArrowDown",
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
