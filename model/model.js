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
  constructor(id) {
    this.id = ''
    this.name = ''
    this.price = ''
    this.stockQuantity = ''
  }
}

export class Book extends Item {
  constructor() {
    super()
    this.author = ''
    this.isbn = ''
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