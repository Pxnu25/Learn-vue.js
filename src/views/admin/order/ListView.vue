<script setup>
import { RouterLink } from 'vue-router';

import { useAdminOrderStore } from '@/stores/admin/order';

import AdminLayout from '@/layouts/AdminLayout.vue';
import Table from '@/components/Table.vue';

const adminOrderStore = useAdminOrderStore()
</script>

<template>
    <AdminLayout>
        <div class="flex items-center justify-between my-4 pt-8 px-6">
            <div class="text-3xl font-bold">Order</div>
        </div>
        <div class="divider mx-6"></div>
        <Table :headers="['Customer Name', 'Price', 'Status', 'Updated At']">
            <tr v-for="(order, index) in adminOrderStore.list">
                <td>{{ order.customerName }}</td>
                <td>{{ order.totalPrice }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.updatedAt }}</td>
                <td>
                    <RouterLink 
                        class="btn bg-black text-white "
                        :to="{ name:'admin-orders-detail', params: {id : index} }" 
                        >See Detail 
                    </RouterLink>
                </td>
            </tr>
            
        </Table>
    </AdminLayout>
</template>