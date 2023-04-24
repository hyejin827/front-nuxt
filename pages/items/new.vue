<template>
  <div class="container">
    <div>상품 등록</div>

      <div class="form-group">
          <label for="name">상품명</label>
          <input v-model="book.name" type="text" class="form-control" placeholder="이름을 입력하세요">
      </div>
      <div class="form-group">
          <label for="price">가격</label>
          <input v-model="book.price" type="number" class="form-control" placeholder="가격을 입력하세요">
      </div>
      <div class="form-group">
          <label for="stockQuantity">수량</label>
          <input v-model="book.stockQuantity" type="number" class="form-control" placeholder="수량을 입력하세요">
      </div>
      <div class="form-group">
          <label for="author">저자</label>
          <input v-model="book.author" type="text" class="form-control" placeholder="저자를 입력하세요">
      </div>
      <div class="form-group">
          <label for="isbn">ISBN</label>
          <input v-model="book.isbn" type="text" class="form-control" placeholder="ISBN을 입력하세요">
      </div>
      <button type="submit" class="btn btn-primary" @click="submitBook">Submit</button>
    <br/>
  </div>
</template>

<script>
import { createItem } from '~/api'
import { Book } from '~/model/model'
export default {
  data() {
    return {
      book: new Book(),
    }
  },
  methods: {
    async submitBook() {
      const res = await createItem(this.book)
      if (res.data === 'success') {
        this.$router.push('/items/list')
      }
    }
  }
}
</script>

<style>

</style>