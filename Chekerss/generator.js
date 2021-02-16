
function chekGen () {
    let chekerss = document.querySelector ('.chekerss')
    
    let field = document.createElement ('div')
    field.className = 'field'
      
    let lettersField = document.createElement ('div')
    lettersField.className = 'lettersField'
      
    let numbersField = document.createElement ('div')
    numbersField.className = 'numbersField'
    
    let nothing = document.createElement ('div')
    nothing.className = 'nothing'
    chekerss.appendChild (lettersField)
    chekerss.appendChild (field)
    chekerss.appendChild (nothing)
    chekerss.appendChild (numbersField)

    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

    for (let i = 1; i <= 4; i++) {
        for (let j = 1; j <=4; j++) {
            let blackSQ = document.createElement ('div')
            blackSQ.className = 'black'
            let whiteSQ = document.createElement ('div')
            whiteSQ.className = 'white'
            field.appendChild (blackSQ)
            field.appendChild (whiteSQ)
        }
        for (let j = 1; j <=4; j++) {
            let whiteSQ = document.createElement ('div')
            whiteSQ.className = 'white'
            let blackSQ = document.createElement ('div')
            blackSQ.className = 'black'
            field.appendChild (whiteSQ)
            field.appendChild (blackSQ)
        }

    }
    for (let k = 0; k <arr.length; k++) {
        let lettersSQ = document.createElement ('div')
        lettersField.appendChild (lettersSQ)
        lettersSQ.className = 'lettersSQ'
        lettersSQ.innerHTML = arr[k]
    }
    for (let k = 1; k <= 8; k++) {
        let numbersSQ = document.createElement ('div')
        numbersField.appendChild (numbersSQ)
        numbersSQ.className = 'numbersSQ'
        numbersSQ.innerHTML = k
    }
}
chekGen ()

