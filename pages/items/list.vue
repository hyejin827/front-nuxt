<template>
  <div class="container">
    <div>상품 목록</div>
    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>가격</th>
                <th>재고수량</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in itemList" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.stockQuantity }}</td>
                <td>
                    <a class="btn btn-primary" role="button" @click="moveToEdit(item.id)">수정</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  </div> <!-- /container -->
</template>

<script>
import { fetchItems } from '~/api'
export default {
  async asyncData() {
    const res = await fetchItems()
    const itemList = res.data
    return { itemList }
  },
  data() {
    return {
      itemList: []      
    }
  },
  methods: {
    moveToEdit(id) {
        this.$router.push(`/items/${id}`)
    }
  }
}
</script>

<style>

</style>