<script setup>
import {  defineProps } from 'vue';

defineProps({
    headers: Array
})
</script>

<template>
    <div class="overflow-x-auto">
        <div class="card w-full px-6 mt-2">
            <table class="table">
                <!-- head -->
                <thead>
                    <tr>
                        <th v-for="header in headers">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <slot></slot>
                </tbody>
            </table>
        </div>
    </div>
</template>