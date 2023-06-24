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
      d="M16.75 12.75a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm1.59 4a.75.75 0 0 1-1.06 1.06l-.53-.53-.53.53a.75.75 0 0 1-1.06-1.06l.53-.53-.53-.53a.75.75 0 0 1 1.06-1.06l.53.53.53-.53a.75.75 0 1 1 1.06 1.06l-.53.53.53.53ZM11.25 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      fill="currentColor"
      d="M12.74 20h-7a1.94 1.94 0 0 1-1.94-1.94v-3.62a1.94 1.94 0 0 1 1.89-1.94h7.05a.3.3 0 0 1 .26.5 5 5 0 0 0 0 6.52.3.3 0 0 1-.26.48Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User2Cross",
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
