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
      d="M14.01 14.81h-3.75M4.53 9.55 5.93 18A2.1 2.1 0 0 0 8 19.71h8A2.1 2.1 0 0 0 18.07 18l1.4-8.4a2.1 2.1 0 0 0-2.07-2.5H6.6a2.1 2.1 0 0 0-2.07 2.45Zm.16.7h14.62M7.78 7.11l1.88-2.82m6.56 2.82-1.88-2.82"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasketMinus",
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
