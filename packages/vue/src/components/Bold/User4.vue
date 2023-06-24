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
      d="M12 9.81a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4.81 20.19a.31.31 0 0 1-.3-.32 7.5 7.5 0 0 1 15 0 .308.308 0 0 1-.182.293.31.31 0 0 1-.118.027H4.81Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User4",
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
