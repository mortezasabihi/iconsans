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
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="M18.8 10.5v3.71a3 3 0 0 1-3 3h-5.21a1 1 0 0 0-.7.3l-2.84 2.84A.5.5 0 0 1 6.2 20v-1.93a1 1 0 0 0-.8-1 3 3 0 0 1-2.2-2.89V8.35a3 3 0 0 1 3-3h7.6"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M18.8 3.5v4m2-2h-4"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8 11.2v.01m3-.01v.01m3-.01v.01"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessagePlus",
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
