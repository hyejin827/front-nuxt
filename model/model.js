export class Address {
  constructor() {
    this.city = ''
    this.street = ''
    this.zipcode = ''
  }
}

export class Delivery {
  constructor() {
    this.id = ''
    this.order = new Order()
    this.address = new Address()
  }
}

export class Member {
  constructor() {
    this.id = ''
    this.name = ''
    this.address = new Address()
  }
}

export class Order {
  constructor() {
    this.id = ''
    this.member = new Member()
    this.orderItems = []
    this.devliery = new Delivery()
    this.orderDate = ''
    this.status = ''
  }
}

export class Item {
  constructor() {
    this.id = ''
    this.name = ''
    this.price = ''
    this.stockQuantity = ''
  }
}

export class Book {
  constructor() {
    this.author = ''
    this.isbn = ''
    this.item = new Item()
  }
}

export class OrderItem {
  constructor() {
    this.id = ''
    this.item = new Item()
    this.order = new Order()
    this.orderPrice = ''
    this.count = ''
  }
}