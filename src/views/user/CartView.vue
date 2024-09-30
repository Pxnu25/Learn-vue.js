<script setup>
import { RouterLink } from 'vue-router';

import UserLayout from '@/layouts/UserLayout.vue';
import Close from '@/components/icons/Close.vue';

import { useUserCartStore } from '../../stores/user/cart';

const userCartStore = useUserCartStore()

const changeQuantity = (event, index) => {
    const newQuantity = parseInt(event.target.value)
    userCartStore.updateQuantity(index, newQuantity)
}
</script>

<template>
    <UserLayout>
        <div class="container mx-auto my-4">
            <h1 class="text-3xl font-bold mx-16 my-4">Shopping Cart</h1>
            <div class="flex mx-16 mb-4">
                <div class="flex-auto w-64 bg-base-200 p-4 ">
                    <div v-if="userCartStore.items.length === 0">
                        Cart is empty
                    </div>
                    <div v-else v-for="(item, index) in userCartStore.items " class="flex">
                        <div class="flex-1">
                            <img class="w-full p-8" :src="item.imageUrl" >
                        </div>
                        <div class="flex-1">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <div class="relative grid grid-cols-2 my-8">
                                        <div>
                                            <div><b>{{ item.name }}</b></div>
                                            <div>{{ item.about }}</div>
                                            <div>{{ item.price }} B</div>
                                        </div>
                                        <div>
                                            <select v-model="item.quantity" @change="changeQuantity($event, index)"class="w-1/2 p-2">
                                                <option v-for="quantity in [1,2,3,4,5]">{{ quantity }}</option>
                                            </select>
                                        </div>
                                        <div @click="userCartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                                            <Close></Close>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="flex mb-8"><b>In stock</b></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-auto w-32 bg-slate-200 p-4 font-bold">
                    <div class="text-xl font-bold my-6">Summary Order</div>
                    <div class="my-4 mx-2 divide-y divide-black">
                        <div class="flex justify-between py-2">
                            <div>ราคาสินค้าทั้งหมด</div>
                            <div>{{ userCartStore.summaryPrice }}</div>
                        </div>
                        <div class="flex justify-between py-2">
                            <div>ค่าส่ง</div>
                            <div>0</div>
                        </div>
                        <div class="flex justify-between py-2">
                            <div>รวมราคาทั้งหมด</div>
                            <div>{{ userCartStore.summaryPrice }}</div>
                        </div>
                    </div>
                    <RouterLink :to="{  name: 'checkout' }" class="btn btn btn-block bg-black text-white bg-black text-white">ชำระเงิน</RouterLink>
                </div>
            </div>
        </div>
    </UserLayout>
</template>