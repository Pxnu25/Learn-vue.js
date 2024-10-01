<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'

import { useUserCartStore } from './stores/user/cart';
import { useUserProductStore } from './stores/user/product';
import { useEventStore } from './stores/event'

const userCartStore = useUserCartStore()
const userProductStore = useUserProductStore()
const eventStore = useEventStore()

onMounted(() => {
  userCartStore.loadCart()
  userProductStore.loadProduct()
  
})
</script>

<template>
  <div v-if="eventStore.alert" class="toast">
    <div class="alert" :class=" `alert-${eventStore.data.status} `">
      <span>{{ eventStore.data.message }}</span>
    </div>
  </div>
  <RouterView />
</template>

