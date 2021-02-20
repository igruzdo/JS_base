let cart = document.querySelector ('.cart')
let cartSumm = document.querySelector ('.cartSumm')

let car_1 = {
    marke: 'BMW',
    model: 'x3',
    power: 150,
    price: 300
}
let car_2 = {
    marke: 'Mazda',
    model: 'CX-5',
    power: 130,
    price: 200
}
let car_3 = {
    marke: 'Opel',
    model: 'astra',
    power: 100,
    price: 150
}
let car_4 = {
    marke: 'Mersedes',
    model: 'C-AMG',
    power: 250,
    price: 450
}

let gut_1 = document.createElement ('div')
gut_1.id = 'car_1'
let  button_buy_1 = document.createElement ('button')
button_buy_1.id = 'button_car_1'

let gut_2 = document.createElement ('div')
gut_1.id = 'car_2'
let  button_buy_2 = document.createElement ('button')
button_buy_2.id = 'button_car_2'

let gut_3 = document.createElement ('div')
gut_1.id = 'car_3'
let  button_buy_3 = document.createElement ('button')
button_buy_3.id = 'button_car_3'

let gut_4 = document.createElement ('div')
gut_1.id = 'car_4'
let  button_buy_4 = document.createElement ('button')
button_buy_4.id = 'button_car_4'

let arr_gutsGen = [gut_1, gut_2, gut_3, gut_4]
let arr_buttonGutsGen = [button_buy_1, button_buy_2, button_buy_3, button_buy_4]
let gutsList = [car_1, car_2, car_3, car_4]

for (let i = 0; i < arr_gutsGen.length; i++) {
    cart.appendChild (arr_gutsGen[i])
    arr_gutsGen[i].innerHTML =  'Марка: ' + gutsList[i].marke + '. Цена: ' + gutsList[i].price    
    cart.appendChild (arr_buttonGutsGen[i])
    arr_buttonGutsGen[i].innerHTML = 'Купить'
}

let cartcount = []
cartSumm.innerHTML = 'Корзина пустая'
let buttons = document.getElementsByTagName ('button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        cartcount.push (gutsList[i].price)
        summPrice (cartcount)
    }
}


function summPrice (arr) {

    if (arr.length == 0) {
        cartSumm.innerHTML = 'Корзина пустая'
    } else {
        let sum = 0
        for (i=0; i < arr.length; i++ ) {
            sum += arr[i]
        }
        cartSumm.innerHTML = 'В корзине ' + arr.length +' товаров на сумму ' + sum + ' рублей.'
        cartSumm.classList.add("yellow")
    }
}
