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
      d="M20.92 8.5a4 4 0 0 0-3.25-3.92V3a.75.75 0 1 0-1.5 0v1.5h-7.5V3a.75.75 0 0 0-1.5 0v1.5h-.25a4 4 0 0 0-4 4v.25h18V8.5Zm-3.34 4.75a5 5 0 0 1 3.34 1.28v-4.28h-18v7.5a4 4 0 0 0 4 4H14a5 5 0 0 1 3.58-8.5Zm-9.66 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z"
    />
    <path
      fill="currentColor"
      d="M17.58 14.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.62 4.06a.75.75 0 0 1 0 1.06.79.79 0 0 1-.53.22.75.75 0 0 1-.53-.22l-.56-.56-.56.56a.75.75 0 0 1-.53.22.79.79 0 0 1-.53-.22.75.75 0 0 1 0-1.06l.56-.56-.52-.56a.75.75 0 0 1 1-1.06l.56.56.56-.56a.75.75 0 1 1 1.06 1.06l-.56.56.58.56Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalendarCross",
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
