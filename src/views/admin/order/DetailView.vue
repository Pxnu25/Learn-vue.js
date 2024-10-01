i<script setup>

import { ref, onMounted } from 'vue';
import { useRoute, RouterLink} from 'vue-router';

import { useAdminOrderStore } from '@/stores/admin/order';

import AdminLayout from '@/layouts/AdminLayout.vue';

const adminOrderStore = useAdminOrderStore()

const route = useRoute()

const orderIndex = ref(-1)
const orderData = ref({
    products: []
})

onMounted(() => {
    if (route.params.id) {
        orderIndex.value = parseInt(route.params.id)
        const selectedOrder = adminOrderStore.getOrder(orderIndex.value)
        orderData.value = selectedOrder
    }

})
</script>

<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-14">
            <div class="text-3xl font-bold">Order Detail Id : {{ orderIndex }}</div>
            <div class="divider"></div>
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <div class="font-bold">Order Date</div>
                    <div>{{ orderData.updatedAt }}</div>
                </div>
                <div>
                    <div class="font-bold">Order Number</div>
                    <div>{{ orderData.no }}</div>
                </div>
                <div>
                    <div class="font-bold">Payment Method</div>
                    <div>{{ orderData.paymentMethod }}</div>
                </div>
                <div>
                    <div class="font-bold">Address</div>
                    <div>{{ orderData.address }}</div>
                </div>
            </div>
            <div class="divider"></div>
            <div v-for="product in orderData.products" class="grid grid-cols-4 gap-2 items-center ">
                <div class="mx-auto">
                    <img class="w-20 p-4" :src="product.imageUrl" alt="">
                </div>
                <div>
                    <div class="font-bold">{{ product.name }}</div>
                    <div>{{ product.description }}</div>
                </div>
                <div>
                    จำนวน {{ product.quantity }} ชิ้น
                </div>
                <div>
                    {{ product.price }} B
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex justify-between">
                <div class="font-bold">ราคาสินค้าทั้งหมด</div>
                <div>{{ orderData.totalPrice }}</div>
            </div>
            <div class="flex justify-end mt-4">
                <RouterLink :to="{name : 'admin-orders-list' }" class="btn bg-black text-white">Back</RouterLink>
            </div>
        </div>
    </AdminLayout>
</template>