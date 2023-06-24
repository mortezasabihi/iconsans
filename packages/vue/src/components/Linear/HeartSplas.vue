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
      d="M19.05 5a4.21 4.21 0 0 0-2.31-.84A4.51 4.51 0 0 0 12 8.68a4.51 4.51 0 0 0-4.74-4.5A4.71 4.71 0 0 0 3 9a10.93 10.93 0 0 0 3.59 8.4M10 19.61c.463.212.937.399 1.42.56.401.14.839.14 1.24 0C14.65 19.5 21 16.78 21 9a4.804 4.804 0 0 0-.07-.85m-.43-4.42L4 20.23"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeartSplas",
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
