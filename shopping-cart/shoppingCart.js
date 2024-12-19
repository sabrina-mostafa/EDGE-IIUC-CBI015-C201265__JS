let add = document.getElementById("plus");
let reject = document.getElementById("minus");
let productPrice = document.getElementById("price");
let PhoneAmount = document.getElementById("amount");

add.addEventListener("click", increase);
reject.addEventListener("click", decrease);


function increase() {
    productPrice.innerHTML = "$" + Number(Number(productPrice.innerHTML.split('$')[1]) + 1219) ;
    PhoneAmount.value = Number(PhoneAmount.value) + 1;
}

function decrease() {
    if (Number(PhoneAmount.value) > 1) {
        productPrice.innerHTML = "$" + Number(Number(productPrice.innerHTML.split('$')[1]) - 1219) ;
        PhoneAmount.value = Number(PhoneAmount.value) - 1;
    }
}