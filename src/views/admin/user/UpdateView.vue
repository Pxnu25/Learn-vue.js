<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { useAdminUserStore } from '@/stores/admin/user'
import { useEventStore } from '@/stores/event'

import AdminLayout from '@/layouts/AdminLayout.vue';

const adminUserStore = useAdminUserStore()
const eventStore = useEventStore()
const route = useRoute()
const router = useRouter()

const userIndex = ref(-1)

const formData = [
    {
        name: "Name",
        field: "fullname",
        type: "text"
    },
    {
        name: "Role",
        field: "role",
        type: "select",
        dropDownList: ["Admin", "Moderator", "User"]
    },{
        name: "Status",
        field: "status",
        type: "select",
        dropDownList: ["Active", "Inactive"]
    }
]

const userData = reactive({
    fullname: "",
    role: "",
    status: ""
})

onMounted(() => {
    if (route.params.id) {
        userIndex.value = parseInt(route.params.id)
        const selectedUser = adminUserStore.getUser(userIndex.value)

        userData.fullname = selectedUser.fullname
        userData.role = selectedUser.role
        userData.status = selectedUser.status
    }
})

const updateUserInPage = () => {
    adminUserStore.updateUser(userIndex.value, userData)
    eventStore.popupMessage("info", "Update user successful")
    router.push({ name: "admin-users-list" })
}
</script>

<template>
    <AdminLayout>
        <div class="shadow-xl p-8 mt-14">
            <div class="text-3xl font-bold">Update User</div>
            <div class="divider"></div>

            <div class="grid grid-cols-1 gap-2">
                <label v-for="form in formData" class="form-control w-full">
                    <div class="label">
                        <span class="label-text">{{ form.name }}</span>
                    </div>
                    <input 
                        v-if="form.type === 'text'"
                        v-model="userData[form.field]"
                        type="text"  
                        class="input input-bordered w-full"
                    />
                    
                    <select 
                        v-if="form.type === 'select'"
                        v-model="userData[form.field]"
                        type="text"  
                        class="select select-bordered input input-bordered w-full"
                    >
                        <option v-for="dropDownList in form.dropDownList ">
                            {{ dropDownList }}
                        </option>
                    </select>
                </label>
            </div>

            <div class="flex mt-4 justify-end">
                <RouterLink :to="{ name: 'admin-users-list' }" class="btn btn-ghost">Back</RouterLink>
                <button class="btn  bg-black text-white " @click="updateUserInPage()">Update</button>
            </div>
        </div>
        
    </AdminLayout>
</template>