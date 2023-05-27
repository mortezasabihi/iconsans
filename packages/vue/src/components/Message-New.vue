<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    :width="width"
    :height="height"
  >
    <g stroke="currentColor" stroke-linecap="round">
      <path
        stroke-miterlimit="10"
        stroke-width="1.5"
        d="M19.8 10v3.28a3 3 0 0 1-3 3h-5.21a1 1 0 0 0-.7.29l-2.84 2.86a.5.5 0 0 1-.85-.36v-1.92a1 1 0 0 0-.8-1 3 3 0 0 1-2.2-2.89V7.43a3 3 0 0 1 3-3H14"
      />
      <path
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M18.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      />
      <path
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 10.3v.001m3-.001v.001m3-.001v.001"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Message-New",
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
