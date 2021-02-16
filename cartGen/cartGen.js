let cart = document.querySelector ('.cart')

let car_1 = {
    make: 'BMW',
    model: 'x3',
    power: 150,
    price: 300
}
let car_2 = {
    make: 'Mazda',
    model: 'CX-5',
    power: 130,
    price: 200
}
let car_3 = {
    make: 'Opel',
    model: 'astra',
    power: 100,
    price: 150
}
let car_4 = {
    make: 'Mersedes',
    model: 'C-AMG',
    power: 250,
    price: 450
}
let cartcount = [car_1, car_2, car_3, car_4]


// let cartcount = []

if (cartcount.length == 0) {
    cart.innerHTML = 'Корзина пустая'
} else {
    let sum = 0
    for (i=0; i < cartcount.length; i++ ) {
        sum += cartcount[i].price
    }
    cart.innerHTML = 'В корзине ' + cartcount.length +' товаров на сумму ' + sum + ' рублей.'

}