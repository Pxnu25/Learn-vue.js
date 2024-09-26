import { defineStore } from 'pinia'

export const useUserProductStore = defineStore('product', {
  state: () => ({
    list: [
      {
        name: 'test',
        imageUrl: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68',
        quantity: 10,
        about: 'testt',
        status: 'open',
        price: 1000,
      },
      {
        name: 'test 2',
        imageUrl: 'https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
        quantity: 20,
        about: 'testt dsadasdsadsadas',
        status: 'open',
        price: 100,
      },
      {
        name: 'test 3',
        imageUrl: 'https://fastly.picsum.photos/id/92/3888/2592.jpg?hmac=zjtfq2PUyiCMP_fW5nSOu7R7ORcLetm-M3gyCPwNMKI',
        quantity: 20,
        about: 'Shell',
        status: 'open',
        price: 200,
      },
      {
        name: 'test 4',
        imageUrl: 'https://fastly.picsum.photos/id/122/3888/2592.jpg?hmac=xkROmdWG_MzDmpTM2MTawXrpURb60jcTqzkxatKBbOk',
        quantity: 20,
        about: 'Image view',
        status: 'open',
        price: 300,
      }
    ]
  }),
  actions: {
    filterProducts (searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})