<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useAdminProductStore } from '@/stores/admin/product';

import AdminLayout from '@/layouts/AdminLayout.vue';

import Edit from '@/components/icons/Edit.vue';
import Trash from '@/components/icons/Trash.vue';

const adminProductStore = useAdminProductStore()

onMounted(() => {
    adminProductStore.loadProduct()
})

const removeProduct = (index) => {
    adminProductStore.removeProduct(index)
}
</script>

<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4">
            <div class="text-3xl font-bold">Product</div>
            <div>
                <RouterLink :to="{ name : 'admin-products-create' }" class="btn btn-block bg-black text-white">Add new</RouterLink>
            </div>
        </div>
        <div class="overflow-x-auto">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        <th>Updated At</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <!-- row -->
                    <tr v-for="(product, index) in adminProductStore.list">
                        <td>{{ product.name }}</td>
                        <td>
                            <img :src="product.imageUrl" class="w-12">
                        </td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.quantity }} / {{ product.remainQuantity }}</td>
                        <td>
                            <div class="badge" :class="product.status === 'open' ? 'badge-success' : 'badge-error'">
                                {{ product.status }}
                            </div>
                        </td>
                        <td>{{ product.updatedAt }}</td>
                        <td>
                            <div class="flex gap-2 ">
                                <RouterLink :to="{ name : 'admin-products-update', params: { id:index }  }" class="btn btn-ghost">
                                    <Edit></Edit>
                                </RouterLink>
                                <div @click="removeProduct(index)" class="btn btn-ghost">
                                    <Trash></Trash>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AdminLayout>
</template>