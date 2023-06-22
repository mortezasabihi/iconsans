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
      d="m20 16-2.24-2.25a1.07 1.07 0 0 0-1.5 0l-.75.75a1.07 1.07 0 0 1-1.5 0L9.47 10a1.07 1.07 0 0 1 0-1.5l.75-.75a1.07 1.07 0 0 0 0-1.5L8 4.05a1.05 1.05 0 0 0-1.5 0L5 5.54a4.22 4.22 0 0 0 0 6L12.47 19a4.22 4.22 0 0 0 6 0L20 17.53A1.05 1.05 0 0 0 20 16Zm-4.8-7.7a.75.75 0 0 0 1.06 0l1.24-1.24 1.24 1.24c.14.14.331.22.53.22a.79.79 0 0 0 .53-.22.75.75 0 0 0 0-1.06L18.56 6l1.24-1.24a.75.75 0 0 0-1.06-1.06L17.5 4.94 16.26 3.7a.75.75 0 0 0-1.06 1.06L16.44 6 15.2 7.24a.75.75 0 0 0 0 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CallCross",
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
