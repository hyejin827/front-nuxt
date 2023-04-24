<template>
  <div class="container">
    <div>상품 수정</div>

    <form>
        <div class="form-group">
            <label for="name">상품명</label>
            <input v-model="book.item.name" type="text" class="form-control" placeholder="이름을 입력하세요" />
        </div>
        <div class="form-group">
            <label for="price">가격</label>
            <input v-model="book.item.price" type="number" class="form-control" placeholder="가격을 입력하세요" />
        </div>
        <div class="form-group">
            <label for="stockQuantity">수량</label>
            <input v-model="book.item.stockQuantity" type="number" class="form-control" placeholder="수량을 입력하세요" />
        </div>
        <div class="form-group">
            <label for="author">저자</label>
            <input v-model="book.author" type="text" class="form-control"  placeholder="저자를 입력하세요" />
        </div>
        <div class="form-group">
            <label for="isbn">ISBN</label>
            <input v-model="book.isbn" type="text" class="form-control"  placeholder="ISBN을 입력하세요" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div> <!-- /container -->

</template>

<script>
import { createItem, fetchItem } from '~/api'
import { Book } from '~/model/model'
export default {
    async asyncData({ params }) {
        const res = await fetchItem(params.id)
        const book = res.data
        return { book }
    },
    data() {
        return {
            book : new Book()
        }
    },
    methods: {
        async editBook(){
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