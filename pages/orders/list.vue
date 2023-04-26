<template>
  <div class="container">
    <div>주문 내역</div>
    <div>
        <div>
            <div class="form-group mb-2">
                <input v-model="orderSearch.memberName" type="text" class="form-control" placeholder="회원명"/>
            </div>
            <div class="form-group mx-sm-1 mb-2">
                <select th:field="*{orderStatus}" class="form-control">
                    <option value="">주문상태</option>
                    <option></option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary mb-2">검색</button>
        </div>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>회원명</th>
                <th>대표상품 이름</th>
                <th>대표상품 주문가격</th>
                <th>대표상품 주문수량</th>
                <th>상태</th>
                <th>일시</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="order in orderList" :key="order.id">
                <td>{{ order.id }}</td>
                <td>{{ order.memberName }}</td>
                <td>{{ order.itemName }}</td>
                <td>{{ order.price }}</td>
                <td>{{ order.count }}</td>
                <td>{{ order.orderStatus }}</td>
                <td>{{ order.orderDate }}</td>
                <td>
                    <a class="btn btn-danger">CANCEL</a>
                </td>
            </tr>

            </tbody>
        </table>
    </div>
  </div> <!-- /container -->
  
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
    // async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
    //     const orderList = await fetchOrders().then(res => res.data)
    //     debugger
    //     return { orderList }
    // },
    created() {
        this.getOrderList()
    },
    methods: {
        async getOrderList() {
            const orderList = await fetchOrders(this.orderSearch).then(res => res.data)
            this.orderList = orderList
        }
    }
}
</script>

<style>

</style>