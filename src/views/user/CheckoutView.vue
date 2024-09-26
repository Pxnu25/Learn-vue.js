<script setup>
import { reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import UserLayout from '@/layouts/UserLayout.vue';

import { useUserCartStore } from '@/stores/user/cart';

const userCartStore = useUserCartStore()

const router = useRouter()

const checkoutForm = [
    {
        name: "Email Address",
        field: "email",
    },
    {
        name: "Name",
        field: "name",
    },
    {
        name: "Address",
        field: "address",
    },
    {
        name: "Note",
        field: "note",
    }
]

const userCheckoutData = reactive({})

const payment = () => {
    userCartStore.placeOrder(userCheckoutData)
    router.push({ name: "success" })
}
</script>

<template>
    <UserLayout>
        <div class="container mx-auto my-4">
            <h1 class="text-3xl font-bold my-4">Checkout</h1>
            <div class="flex">
                <section class="flex-auto w-64 bg-base-200 p-4 font-bold">
                    <label v-for="form in checkoutForm" class="form-control w-full ">
                        <div class="label">
                            <span class="label-text">{{ form.name }}</span>
                        </div>
                        <input v-model="userCheckoutData[form.field]" type="text" placeholder="Type here" class="input input-bordered w-full " />
                    </label>
                    <button @click="payment" class="btn btn btn-block bg-black text-white bg-black text-white mt-4">ชำระเงิน</button>
                </section>
                <section class="flex-auto w-32 bg-slate-200 p-4 px-2">
                    <div v-for="item in userCartStore.items" class="flex bg-white m-8 py-4">
                        <div class="flex-1">
                            <img class="w-full p-8" :src="item.imageUrl">
                        </div>
                        <div class="flex-1">
                            <div class="flex flex-col justify-between h-full">
                                <div class="my-8">
                                    <div><b>{{ item.name }}</b></div>
                                    <div>จำนวน: {{ item.quantity }}</div>
                                </div>
                                <RouterLink :to="{ name: 'cart' }" class="mb-8">Edit</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="px-12">
                        <div><b>Order Summary</b></div>
                        <div class="flex justify-between">
                            <div>ราคาสินค้าทั้งหมด</div>
                            <div>{{ userCartStore.summaryPrice }}</div>
                        </div>
                        <div class="flex justify-between">
                            <div>ค่าส่ง</div>
                            <div>0</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="flex justify-between px-12 mb-4">
                        <div>รวมราคาทั้งหมด</div>
                        <div>{{ userCartStore.summaryPrice }}</div>
                    </div>
                </section>
            </div>
        </div>
    </UserLayout>
</template>