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
      d="M8 8.5V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5a.999.999 0 0 1-.4.8l-7.2 5.4a1 1 0 0 0-.4.8V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.5a.999.999 0 0 0-.4-.8L8.4 9.3a1 1 0 0 1-.4-.8Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Timer2",
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
