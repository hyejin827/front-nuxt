<template>
  <div class="container">
    <div>상품 주문</div>

    <div class="form-group">
        <label for="member">주문회원</label>
        <select id="member" v-model="formData.memberId" class="form-control">
            <option value="">회원선택</option>
            <option v-for="member in memberList" :key="member.id" :value="member.id">{{ member.name }}</option>
        </select>
    </div>

    <div class="form-group">
        <label for="item">상품명</label>
        <select id="item" v-model="formData.itemId" class="form-control">
            <option value="">상품선택</option>
            <option v-for="item in itemList" :key="item.id" :value="item.id">{{ item.name }}</option>
        </select>
    </div>

    <div class="form-group">
        <label for="count">주문수량</label>
        <input id="count" v-model="formData.orderCnt" type="number" class="form-control" placeholder="주문 수량을 입력하세요">
    </div>

    <button type="submit" class="btn btn-primary" @click="submitOrder">Submit</button>
  </div> <!-- /container -->
  
</template>

<script>
import { createOrder, fetchItems, fetchMembers } from '~/api'
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        const memberList = await fetchMembers().then(res => res.data).catch(error => {
            console.log('회원에러', error)
        })
        const itemList = await fetchItems().then(res => res.data).catch(error => {
            console.log('상품에러', error)
        })
        return { memberList, itemList }
    },
    data() {
        return {
            formData: {
                memberId: '',
                itemId: '',
                orderCnt: 0
            }
        }
    },
    methods: {
        async submitOrder() {
            const res = await createOrder(this.formData)
            if (res.data === 'success') {
            this.$router.push('/orders/list')
            }
        }
    }
}
</script>

<style>

</style>