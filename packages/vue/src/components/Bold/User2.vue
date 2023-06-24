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
      d="M12 9.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5.56 3H6.44a1.94 1.94 0 0 0-1.94 1.94v3.62A1.94 1.94 0 0 0 6.44 20h11.12a1.94 1.94 0 0 0 1.94-1.94v-3.62a1.94 1.94 0 0 0-1.94-1.94Z"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User2",
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
