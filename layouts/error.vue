<template>
  <div class="container">
    <h1 v-if="error.statusCode === 400">400 페이지</h1>
    <h1 v-else>에러났셔</h1>
  </div>
</template>

<script>
export default {
  layout: 'errorLayout',
  props: ['error']
}
</script>