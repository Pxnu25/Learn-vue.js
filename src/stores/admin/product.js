import { defineStore } from "pinia";

export const useAdminProductStore = defineStore("admin-product", {
  state: () => ({
    list: [],
    loaded: false
  }),
  actions: {
    loadProduct () {
      const products = localStorage.getItem("admin-products")
      if (products) {
        this.list = JSON.parse(products)
        this.loaded = true
      }
    },
    getProduct (index) {
      if (!this.loaded) {
        this.loadProduct()
      }
      return this.list[index]
    },
    addProduct (productData) {
      productData.remainQuantity = productData.quantity
      productData.updatedAt = new Date().toISOString()

      this.list.push(productData)
      localStorage.setItem("admin-products", JSON.stringify(this.list))
    },
    updateProduct (index, productData) {
      const fields = ["name", "image", "price", "quantity", "status"]
      for (let field of fields) {
        this.list[index][field] = productData[field]
      } // Loop for reduce to write if full write see below

      // this.list[index].name = productData.name
      // this.list[index].image = productData.image
      // this.list[index].price = productData.price
      // this.list[index].quantity = productData.quantity
      // this.list[index].remainQuantity = productData.quantity
      // this.list[index].status = productData.status

      this.list[index].updatedAt = new Date().toLocaleString()
      localStorage.setItem("admin-products", JSON.stringify(this.list))
    },
    removeProduct (index) {
      this.list.splice(index, 1)
      localStorage.setItem("admin-products", JSON.stringify(this.list))
    }
  },
});
