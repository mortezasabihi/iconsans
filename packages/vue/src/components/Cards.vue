<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-linejoin="round" stroke-width="1.5">
      <path
        stroke-linecap="round"
        d="M15.28 8.32H5.45A2.45 2.45 0 0 0 3 10.77v5.74a2.45 2.45 0 0 0 2.45 2.45h9.83a2.45 2.45 0 0 0 2.45-2.45v-5.74a2.45 2.45 0 0 0-2.45-2.45Z"
      />
      <path
        stroke-linecap="round"
        d="M6.27 8.32V7.5a2.45 2.45 0 0 1 2.46-2.45h9.82A2.45 2.45 0 0 1 21 7.5v5.73a2.45 2.45 0 0 1-2.45 2.45h-.82"
      />
      <path d="M3 12.41h14.73" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Cards",
  props: {
    width: {
      required: false,
      type: Number,
      default: () => 16,
    },
    height: {
      required: false,
      type: Number,
      default: () => 16,
    },
  },
});
</script>
