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
      d="M19.4 8.59a.31.31 0 0 0-.5-.07 3.5 3.5 0 0 1-5.56-4.07.3.3 0 0 0-.24-.45 8.09 8.09 0 0 0-1.83.06 7.51 7.51 0 0 0-4.42 12.4.93.93 0 0 1 .21.81l-.53 2.15a.44.44 0 0 0 .62.5l2.5-1.2a.94.94 0 0 1 .64 0A7.52 7.52 0 0 0 19.87 13a7.44 7.44 0 0 0-.47-4.41ZM9.48 12.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm3 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Zm3 0a1 1 0 1 1 0-1.999 1 1 0 0 1 0 1.999Z"
    />
    <path
      fill="currentColor"
      d="M17 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-.83-2.94h.39v-.39a.44.44 0 0 1 .88 0v.39h.39a.44.44 0 1 1 0 .88h-.39v.39a.44.44 0 0 1-.88 0v-.39h-.39a.44.44 0 1 1 0-.88Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MessagePlus2",
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
