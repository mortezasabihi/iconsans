<template>
    <component :is="iconComponent" />
</template>

<script setup lang="ts">
import { defineProps, computed, defineAsyncComponent, type Component } from 'vue'
import type { IconComponentName } from '.'

interface Props {
    name: IconComponentName
}

const props = defineProps<Props>()

const iconComponent = computed<Component>(() => defineAsyncComponent(() => import(`./${props.name}.vue`)))
</script>