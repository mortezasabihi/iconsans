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
      d="m19.41 18.35-2.59-2.59a7 7 0 1 0-1.06 1.06l2.58 2.59a.76.76 0 0 0 1.07 0 .75.75 0 0 0 0-1.06ZM15 10.47l-4.12 4.12a.739.739 0 0 1-.53.22.729.729 0 0 1-.53-.22L8 12.71a.75.75 0 1 1 1-1.06L10.38 13 14 9.41a.75.75 0 0 1 1 1.06Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchTick1",
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
