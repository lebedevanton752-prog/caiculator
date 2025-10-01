window.onload = function () {
    let inputField = document.getElementById('inputField');
    let butDigits = document.querySelectorAll('.digits-wrap button');
    let butMathOperations = document.querySelectorAll('.math-wrap button');
    let number1 = 0;
    let number2 = 0;
    let clean = 0;

    butDigits.forEach(function (el) {
        el.addEventListener('click', function (e) {
            console.log(e.target.innerText)

            if (clean === 1) {
                inputField.value ='';
                clean = 0
        }
            inputField.value = inputField.value + e.target.innerText;
        })

    })
    butMathOperations.forEach(function (el) {
            el.addEventListener('click', function (e) {



                    number1 = inputField.value
                    clean=1
                    console.log(e.target.innerText)

                })


            })


}





