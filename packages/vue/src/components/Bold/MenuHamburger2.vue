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
      d="M19 7.25H5a.75.75 0 0 0 0 1.5h14a.75.75 0 1 0 0-1.5Zm-5 4H5a.75.75 0 1 0 0 1.5h9a.75.75 0 1 0 0-1.5Zm-3 4H5a.75.75 0 1 0 0 1.5h6a.75.75 0 1 0 0-1.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuHamburger2",
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
