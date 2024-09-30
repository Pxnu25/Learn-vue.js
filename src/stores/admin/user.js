import { defineStore } from "pinia";

export const useAdminUserStore = defineStore("admin-user", {
    state: () => ({
        list: [
            {
                fullname: "Panu",
                role: "Admin",
                status: "Active",
                updatedAt: new Date().toLocaleString()              
            }
        ]
    }),
    actions: {
        getUser (index) {
            return this.list[index]
        },
        updateUser (index, userData) {
            const fields = ["fullname", "role", "status"]
            for (let field of fields) { // Similar page product.js (stores/admin)
                this.list[index][field] = userData[field]
            }
            this.list[index].updatedAt = new Date().toLocaleString()
        },
        removeUser (index) {
            this.list.splice(index, 1)
        }
    }
})