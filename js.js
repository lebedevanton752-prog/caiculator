window.onload = function () {
    let inputField = document.getElementById('inputField');
    let butRavno = document.getElementById('Ravno');
    let butDigits = document.querySelectorAll('.digits-wrap button');
    let butMathOperations = document.querySelectorAll('.math-wrap button');
    let number1 = 0;
    let number2 = 0;
    let clean = 0;
    let mathOperation = ''

    butDigits.forEach(function (el) {
        el.addEventListener('click', function (e) {
            console.log(e.target.innerText)

            if (clean === 1) {
                inputField.value = '';
                clean = 0
            }
            inputField.value = inputField.value + e.target.innerText;
        })

    })
    butMathOperations.forEach(function (el) {
        el.addEventListener('click', function (e) {

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
        if (mathOperation ==='+') {
        inputField.value = +number1 + +inputField.value
        }
        if (mathOperation ==='-') {
            inputField.value = +number1 - +inputField.value
        }
        if (mathOperation ==='*') {
            inputField.value = +number1 * +inputField.value
        }
        if (mathOperation ==='/') {
            inputField.value = +number1 / +inputField.value
        }
    })

}
// TODO
// баг нолик
// перв нол




