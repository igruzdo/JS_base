let cart = document.querySelector ('.cart')
let in_cart = document.querySelector ('.in_cart')
let cartSumm = document.querySelector ('.cartSumm')

let car_1 = {
    marke: 'BMW',
    model: 'x3',
    power: 150,
    price: 300,
    count: 0
}
let car_2 = {
    marke: 'Mazda',
    model: 'CX-5',
    power: 130,
    price: 200,
    count: 0
}
let car_3 = {
    marke: 'Opel',
    model: 'astra',
    power: 100,
    price: 150,
    count: 0
}
let car_4 = {
    marke: 'Mersedes',
    model: 'C-AMG',
    power: 250,
    price: 450,
    count: 0
}


let gutsList = [car_1, car_2, car_3, car_4]

// генерируем список товаров

for (let i = 0; i < gutsList.length; i++) {
    let gut = document.createElement ('div')
    gut.classList.add ('gut_' + [i])
    cart.appendChild (gut)
    let img_car = document.createElement ('img')
    img_car.src = 'img_main/img_main_' + ([i+1])+ '.jpg'
    img_car.classList.add ('img_car')
    cart.appendChild (img_car)
    gut.innerHTML =  'Марка: ' + gutsList[i].marke + '. Цена: ' + gutsList[i].price    
    let  button_buy = document.createElement ('button')
    button_buy.classList.add ('button_buy')
    cart.appendChild (button_buy)
    button_buy.innerHTML = 'Купить'
}

//модальное окно со слайдером

const img_btn = document.querySelector ('.img_car')
const modal = document.querySelector ('.modal_img_cars')
const backgroundScreen = document.querySelector ('.screen_behind')

img_btn.addEventListener ('click', function(e){
    e.stopPropagation ()
    modal.style.display = 'flex'
    backgroundScreen.style.display = 'block'
})

backgroundScreen.addEventListener ('click', function(){
    modal.style.display = 'none'
    backgroundScreen.style.display = 'none'
})


//слайдер

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//добавляем товары в корзину при  нажатии кнопки "купить"

cartSumm.innerHTML = 'Корзина пустая'
let buttons_arr = document.querySelectorAll ('.button_buy')
for (let i = 0; i < buttons_arr.length; i++) {
    buttons_arr[i].onclick = function () {  
       
        if (gutsList[i].count == 0) {
            const gut_in_cart = document.createElement ('div')
            gut_in_cart.classList.add (gutsList[i].marke)
            in_cart.appendChild (gut_in_cart)
            const button_del = document.createElement ('button')
           
            button_del.innerHTML = 'Удалить'
            in_cart.appendChild (button_del)
            button_del.classList.add ('button_del_'+gutsList[i].marke)
            button_del.id = 'button_del_'+ gutsList[i].marke
 
            gutsList[i].count = gutsList[i].count + 1
            gut_in_cart.innerHTML = 'Товар :' + gutsList[i].marke + '. Количество: ' + gutsList[i].count 
        } else {
            gutsList[i].count = gutsList[i].count + 1
            document.querySelector ('.'+ gutsList[i].marke).innerHTML = 'Товар :' + gutsList[i].marke + '. Количество:' + gutsList[i].count
        }

        summPrice (gutsList)

        // удаление товара при нажатии кнопки "удалить"

        function redawCart (arr, arrCount) {
            arr.count--
            document.querySelector('.'+arr.marke).innerHTML = 'Товар :' + arr.marke + '. Количество: ' + arr.count
            if (arr.count == 0) {
                document.querySelector('.'+arr.marke).remove()
                document.querySelector ('.button_del_'+arr.marke).remove()
            }
            summPrice (arrCount) 
        }

        document.querySelector ('.button_del_'+gutsList[0].marke).onclick = function(){
            redawCart (gutsList[0], gutsList)  
        }
        document.querySelector ('.button_del_'+gutsList[1].marke).onclick = function(){
            redawCart (gutsList[1], gutsList)  
        }
        document.querySelector ('.button_del_'+gutsList[2].marke).onclick = function(){
            redawCart (gutsList[2], gutsList)  
        }
        document.querySelector ('.button_del_'+gutsList[3].marke).onclick = function(){
            redawCart (gutsList[3], gutsList)  
        }
         
    }
}

//функция пересчета товаров в итоге

function summPrice (arr) {
    let sum = 0
    let number_of_guts = 0
    for (i=0; i < arr.length; i++ ) {
        sum += arr[i].price * arr[i].count
        number_of_guts += arr[i].count
    }
    if (sum  == 0) {
        cartSumm.innerHTML = 'Корзина пустая'
        cartSumm.classList.remove("yellow")
    } else {
        cartSumm.innerHTML = 'В корзине ' + number_of_guts +' товаров на сумму ' + sum + ' рублей.'
        cartSumm.classList.add("yellow")
    }

}

// продолжение покупки по кнопке далее

const section = document.querySelectorAll ('.section')
const next = document.querySelector ('#continue_buy')

let curentSection = 0

function showSection (indx) {
    section[curentSection].classList.remove ('opened')
    section[indx].classList.add ('opened')
    curentSection = indx
}

next.addEventListener ('click', function(){
    showSection ((curentSection + 1 < section.length) ? curentSection + 1 : 0)
})

showSection (0)


