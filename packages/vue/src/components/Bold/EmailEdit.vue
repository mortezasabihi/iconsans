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
      d="M18.6 4H5.4A3.41 3.41 0 0 0 2 7.4v9.2A3.41 3.41 0 0 0 5.4 20h7.06a.29.29 0 0 0 .28-.39 5.249 5.249 0 0 1-.24-1.38 5.5 5.5 0 0 1 9-4.45.29.29 0 0 0 .48-.24V7.4A3.41 3.41 0 0 0 18.6 4Zm-.19 5.63-4.84 3.17a2.67 2.67 0 0 1-1.56.49 2.79 2.79 0 0 1-1.61-.51L5.59 9.63a.752.752 0 1 1 .82-1.26l4.84 3.17a1.26 1.26 0 0 0 1.48 0l4.86-3.19a.752.752 0 0 1 .82 1.26v.02Z"
    />
    <path
      fill="currentColor"
      d="M18 14a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm1.48 3.83-.49.51-1.91 1.9a.34.34 0 0 1-.22.09H16a.31.31 0 0 1-.31-.31v-.88a.32.32 0 0 1 .09-.22L17.66 17l.51-.5a.07.07 0 0 1 .09 0l1.22 1.23a.06.06 0 0 1 0 .1Zm.76-.75-.33.33a.06.06 0 0 1-.09 0l-1.23-1.23a.06.06 0 0 1 0-.09l.33-.33a.301.301 0 0 1 .43 0l.89.89a.301.301 0 0 1 0 .43Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailEdit",
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
