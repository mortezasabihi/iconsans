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
      d="M13 20H5.4A3.41 3.41 0 0 1 2 16.6V7.4A3.41 3.41 0 0 1 5.4 4h13.2A3.41 3.41 0 0 1 22 7.4V12"
    />
    <path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="m6 9 4.84 3.17a2 2 0 0 0 2.32 0L18 9"
    />
    <path
      stroke="currentColor"
      stroke-miterlimit="10"
      stroke-width="1.5"
      d="m19.41 14.33.5 1a.61.61 0 0 0 .45.33l1.13.16a.6.6 0 0 1 .33 1l-.82.79a.62.62 0 0 0-.17.53L21 19.3a.59.59 0 0 1-.86.63l-1-.53a.59.59 0 0 0-.55 0l-1 .53a.59.59 0 0 1-.86-.63l.19-1.12a.62.62 0 0 0-.17-.53l-.82-.79a.6.6 0 0 1 .33-1l1.13-.16a.61.61 0 0 0 .45-.33l.5-1a.6.6 0 0 1 1.07-.04Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailStar",
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
