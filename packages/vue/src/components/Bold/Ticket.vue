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
      d="M19 10h1.6a.4.4 0 0 0 .4-.4V8a3 3 0 0 0-3-3h-2.95a.3.3 0 0 0-.3.3V8a.75.75 0 1 1-1.5 0V5.3A.3.3 0 0 0 13 5H6a3 3 0 0 0-3 3v1.6a.4.4 0 0 0 .4.4H5a2 2 0 0 1 1.878 1.3 2 2 0 0 1 .122.85A2.05 2.05 0 0 1 4.91 14H3.4a.4.4 0 0 0-.4.4V16a3 3 0 0 0 3 3h7a.29.29 0 0 0 .3-.3V16a.75.75 0 1 1 1.5 0v2.7a.29.29 0 0 0 .3.3H18a3 3 0 0 0 3-3v-1.6a.4.4 0 0 0-.4-.4H19a2 2 0 0 1 0-4Zm-4.25 3.33a.75.75 0 1 1-1.5 0v-2.66a.75.75 0 1 1 1.5 0v2.66Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Ticket",
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
