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
      d="M12 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
    />
    <path
      fill="currentColor"
      d="M19 10.25h-.75a.839.839 0 0 1-.59-1.43l.53-.53a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-1.42 0l-.53.53a.84.84 0 0 1-1.43-.59V5a1 1 0 0 0-1-1h-1.5a1 1 0 0 0-1 1v.75a.839.839 0 0 1-1.43.59l-.53-.53a1 1 0 0 0-1.42 0L5.81 6.87a1 1 0 0 0 0 1.42l.53.53a.84.84 0 0 1-.59 1.43H5a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h.75a.839.839 0 0 1 .59 1.43l-.53.53a1 1 0 0 0 0 1.41l1.06 1.06a1 1 0 0 0 1.42 0l.53-.53a.84.84 0 0 1 1.43.6V19a1 1 0 0 0 1 1h1.5a1 1 0 0 0 1-1v-.75a.84.84 0 0 1 1.43-.6l.53.53a1.002 1.002 0 0 0 1.42 0l1.06-1.06a1 1 0 0 0 0-1.41l-.53-.53a.84.84 0 0 1 .59-1.43H19a1 1 0 0 0 1-1v-1.5a1.001 1.001 0 0 0-1-1Zm-7 4.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Setting",
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
