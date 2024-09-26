<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'

import { useUserCartStore } from './stores/user/cart';

const userCartStore = useUserCartStore()

onMounted(() => {
  userCartStore.loadCart()
})
</script>

<template>
  <RouterView />
</template>

