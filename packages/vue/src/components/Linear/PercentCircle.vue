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
      clip-path="url(#a)"
    >
      <path
        stroke-width="1.5"
        d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm2.33-12.5-4.66 7"
      />
      <path stroke-width="2" d="M14.3 15.5v.001M9.7 8.3v.001" />
    </g>
    <defs>
      <clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z" /></clipPath>
    </defs>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PercentCircle",
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
