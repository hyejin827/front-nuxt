<template>
  <div>
    <h1>HOME</h1>
    <p class="lead">회원 기능</p>
    <p>
      <nuxt-link class="btn btn-lg btn-secondary" to="/members/new">회원 가입</nuxt-link>
      <nuxt-link class="btn btn-lg btn-secondary" to="/members/list">회원 목록</nuxt-link>
    </p>
    <p class="lead">상품 기능</p>
    <p>
      <nuxt-link class="btn btn-lg btn-dark" to="/items/new">상품 등록</nuxt-link>
      <nuxt-link  class="btn btn-lg btn-dark" to="/items/list">상품 목록</nuxt-link>
    </p>
    <p class="lead">주문 기능</p>
    <p>
      <nuxt-link class="btn btn-lg btn-info" to="/orders/new">상품 주문</nuxt-link>
      <nuxt-link class="btn btn-lg btn-info" to="/orders/list">주문 내역</nuxt-link>
    </p>
  </div>
</template>

<script>
import { fetchTest } from '~/api'

export default {
  name: 'IndexPage',

  async asyncData() {
    const res = await fetchTest()
    console.log("res ====> " + res.data)
  },
}
</script>
