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
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M7.2 17.15a1 1 0 0 0-.8-1 3 3 0 0 1-2.2-2.89V7.43a3 3 0 0 1 3-3h9.6a3 3 0 0 1 3 3v5.85a3 3 0 0 1-3 3h-5.21a1 1 0 0 0-.7.29l-2.84 2.86a.5.5 0 0 1-.85-.36v-1.92Z"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 10.28v.01m3-.01v.01m3-.01v.01"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Message",
  props: {
    width: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
    height: {
      required: false,
      type: [Number, String],
      default: () => 16,
    },
  },
});
</script>
