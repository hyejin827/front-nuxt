<template>
  <div class="container">
    <div>회원 가입</div>

    
      <div class="form-group">
          <label for="name">이름</label>
          <!-- form-control fieldError -->
          <input id="name" v-model="member.name" type="text" class="form-control" placeholder="이름을 입력하세요">

      </div>
      <div class="form-group">
          <label for="city">도시</label>
          <input id="city" v-model="member.address.city" type="text" class="form-control" placeholder="도시를 입력하세요">
      </div>
      <div class="form-group">
          <label for="street">거리</label>
          <input id="street" v-model="member.address.street" type="text" class="form-control" placeholder="거리를 입력하세요">
      </div>
      <div class="form-group">
          <label for="zipcode">우편번호</label>
          <input id="zipcode" v-model="member.address.zipcode" type="text" class="form-control" placeholder="우편번호를 입력하세요">
      </div>
      <button type="submit" class="btn btn-primary" @click="submitMember">Submit</button>

  </div> <!-- /container -->
  
</template>

<script>
import { Member } from '~/model/model';
import { createMember } from '~/api'

export default {
  data() {
    return {
      member: new Member()
    }
  },
  methods: {
    async submitMember() {
      const res = await createMember(this.member)
      if (res.data === 'success') {
        this.$router.push('/members/list')
      }
    }
  }
}
</script>

<style>

</style>