<template>
  <div class="container">
    <div>회원 목록</div>
    <div>
        <table class="table table-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>이름</th>
                <th>도시</th>
                <th>주소</th>
                <th>우편번호</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="member in memberList" :key="member.id">
                <td> {{ member.id }} </td>
                <td> {{ member.name }} </td>
                <td> {{ member.address.city }} </td>
                <td> {{ member.address.street }} </td>
                <td> {{ member.address.zipcode }} </td>
            </tr>
            </tbody>
        </table>
    </div>
  </div>
  
</template>

<script>
import { fetchMembers } from '~/api'

export default {
  async asyncData() {
    const res = await fetchMembers()
    const memberList = res.data
    debugger
    return { memberList }
  },
  data() {
    return {
      memberList: []
    }
  },
}
</script>

<style>

</style>