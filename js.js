window.onload = function () {
    let inputField= document.getElementById('inputField');
    let butDigits = document.querySelectorAll('.digits-wrap button');

    butDigits.forEach(function (el) {
        el.addEventListener('click',function (e) {
            console.log(e.target.innerText)
        })
    })
}

