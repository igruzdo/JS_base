let catalogJS = document.querySelector ('.catalog')

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
let product = [car_1, car_2, car_3, car_4]

for (i = 0; i < product.length; i++) {
    let prod_create = document.createElement ('div')
    catalogJS.appendChild (prod_create)
    prod_create.innerHTML = 'Марка автомобиля: ' + product[i].make + '.' + ' Стоимость автомобиля: ' + product[i].price + '.'
}