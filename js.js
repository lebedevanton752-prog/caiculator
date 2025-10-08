window.onload = function () {
    let inputField = document.getElementById('inputField');
    let butRavno = document.getElementById('Ravno');
    let butDigits = document.querySelectorAll('.digits-wrap button');
    let butMathOperations = document.querySelectorAll('.math-wrap button');
    let number1 = 0;
    let clean = 0;
    let mathOperation = ''
    let lenInput =1


    butDigits.forEach(function (el) {
        el.addEventListener('click', function (e) {
            console.log(lenInput + 'тугрик' +e.target.innerText)

            if (clean === 1) {
                inputField.value = '';
                clean = 0
            }
            if (lenInput === 1 && e.target.innerText ==='0'){
                return
            }
            inputField.value = inputField.value + e.target.innerText;
            lenInput = lenInput + 1
        })

    })
    butMathOperations.forEach(function (el) {
        el.addEventListener('click', function (e) {
            lenInput = 1

            if (e.target.innerText !== '=') {
                number1 = inputField.value
                clean = 1
                mathOperation = e.target.innerText
                console.log(e.target.innerText)
            }
        })


    })

    butRavno.addEventListener('click', (event) => {
        console.log(number1)
        console.log(mathOperation)
        console.log(inputField.value)

        let num2 = inputField.value

        if (mathOperation === '+') {
            inputField.value = +number1 + +inputField.value
        }
        if (mathOperation === '-') {
            inputField.value = +number1 - +inputField.value
        }
        if (mathOperation === '*') {
            inputField.value = +number1 * +inputField.value
        }
        if (mathOperation === '/') {
            inputField.value = +number1 / +inputField.value

            if (num2 === '0') {
                inputField.value = 'ааа бугульдык ты очень тупое создание'
                console.log('ыхыхы ты очень тупой бегаешь как говно')


            }


        }

    })
}


// TODO
// баг нолик
// перв нол




