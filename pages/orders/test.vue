<template>
  <div>
    {{ orderList }}
  </div>
</template>

<script>
import { fetchOrders } from '~/api'
export default {

    data() {
        return {
            orderSearch: {
                memberName: '',
                orderStatus: 'ORDER'
            },
            orderList: []
        }
    },
    async fetch() {
        await fetchOrders(this.orderSearch).then(res => {
            const orderList = res.data
            this.orderList = orderList
        })
    },
    fetchOnServer: false
}
</script>

<style>

</style>