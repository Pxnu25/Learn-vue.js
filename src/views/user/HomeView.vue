<script setup>
import { useRouter } from 'vue-router';

import UserLayout from '@/layouts/UserLayout.vue';
import Product from '@/components/Product.vue';

import { useUserProductStore } from "../../stores/user/product"
import { useUserCartStore } from '../../stores/user/cart';


const router = useRouter()
const userProductStore = useUserProductStore()
const userCartStore = useUserCartStore()

const addToCart = (product) => {
  userCartStore.addToCart(product)
  router.push({ name: "cart" })
}
</script>

<template>
  <UserLayout>
    
    <div class="hero bg-base-200 h-96">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello there</h1>
          <p class="py-6">Well, I just learing !</p>
        </div>
      </div>
    </div>

    <!-- product -->
    <Product
      :products="userProductStore.list"
      :addToCart="addToCart"
    ></Product>
  </UserLayout>
</template>
