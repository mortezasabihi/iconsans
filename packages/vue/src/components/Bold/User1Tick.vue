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
      d="M11.62 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 3a2.47 2.47 0 0 0-1.77.74 2.51 2.51 0 0 0-.54 2.72A2.57 2.57 0 0 0 6.71 19h5.36a.299.299 0 0 0 .304-.29.3.3 0 0 0-.034-.15 4.75 4.75 0 0 1 0-4.12.3.3 0 0 0-.27-.44H6.62Zm10-.75a3.25 3.25 0 1 0 .02 6.5 3.25 3.25 0 0 0-.02-6.5ZM18.68 16l-2.09 2.08a.75.75 0 0 1-1.06 0l-.95-.95a.75.75 0 1 1 1.06-1.06l.42.42 1.56-1.55a.742.742 0 0 1 1.06 0 .75.75 0 0 1 0 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User1Tick",
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
