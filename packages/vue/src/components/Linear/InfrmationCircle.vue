<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      clip-path="url(#a)"
    >
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm.001-4.5v-6.3m0-2.7H12" />
    </g>
    <defs>
      <clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfrmationCircle",
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
