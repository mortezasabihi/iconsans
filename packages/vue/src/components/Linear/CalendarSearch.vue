<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M17.47 20.94a3.31 3.31 0 1 0 0-6.62 3.31 3.31 0 0 0 0 6.62Zm2.37-.94 1.42 1.42"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M13.13 22H6.74a4 4 0 0 1-4-4V8.75a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4m-13-9.5v3m9-3v3m-14 3.5h18"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M7.74 13.99V14m4-.01V14m-4 3.99V18"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CalendarSearch",
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
