import axios from 'axios'

const test = axios.create({
  baseURL: 'http://localhost:8080/api',
})

const member = axios.create({
  baseURL: 'http://localhost:8080/member',
})

const item = axios.create({
  baseURL: 'http://localhost:8080/item',
})

const order = axios.create({
  baseURL: 'http://localhost:8080/order',
})


function fetchTest() {
  return test.get('/home')
}

function fetchMembers() {
  return member.get('/list')
}

function createMember(data) {
  return member.post('/new', data)
}

function fetchItems() {
  return item.get('/list')
}

function createItem(data) {
  return item.post('/new', data)
}

function fetchItem(id) {
  return item.get(`/detail/${id}`)
}

function createOrder(data) {
  return order.post('/new', data)
}

function fetchOrders(params) {
  return order.get('/list', { params })
}

export { fetchTest, fetchMembers, createMember, fetchItems, createItem, fetchItem, createOrder, fetchOrders }