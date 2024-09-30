<script setup>
import { ref, computed, watch } from "vue"
import { useRoute, useRouter } from 'vue-router';

import UserLayout from '@/layouts/UserLayout.vue';
import Product from '@/components/Product.vue';

import { useUserProductStore } from "../../stores/user/product"
import { useUserCartStore } from '../../stores/user/cart';

const userProductStore = useUserProductStore()
const userCartStore = useUserCartStore()

const route = useRoute()
const router = useRouter()
const searchText = ref("")

watch(() => route.query.q, (newSearchText) => {
    searchText.value = newSearchText
}, {immediate: true})

const filterProducts = computed(() => {
    return userProductStore.filterProducts(searchText.value)
})

const addToCart = (product) => {
  userCartStore.addToCart(product)
  router.push({ name: "cart" })
}

</script>

<template>
    <UserLayout>
        <div class="text-3xl m-4">Search: <b> {{ searchText }} </b></div>
        <Product
            :products="filterProducts"
            :addToCart="addToCart"
        ></Product>
    </UserLayout>
</template>