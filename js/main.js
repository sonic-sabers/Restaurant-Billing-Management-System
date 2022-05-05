let total = document.getElementById("total");
let numberOfPlate = 1;

let order = document.querySelectorAll("section .gpcontainer .group .container .menuOrder");
function addDish(dish, cost, status) {

    let dishes = document.getElementById("dishes")
    let plates = document.getElementById("plates")
    let price = document.getElementById("price")

    let dishInput = document.createElement("span");
    let plateInput = document.createElement("input");
    let priceInput = document.createElement("input");
    dishInput.innerHTML = dish;
    plateInput.type = "number";
    plateInput.value = 1;
    priceInput.type = "number";
    priceInput.value = cost;


    dishInput.className = "items dishItem";
    plateInput.className = "items";
    priceInput.className = "items";

    plateInput.onblur = function () {
        numberOfPlate = plateInput.value;
        priceInput.value = cost * numberOfPlate;

    }

    plateInput.onkeyup = function (event) {
        if (event.code == "Enter" || event.code == "NumpadEnter") {
            numberOfPlate = plateInput.value;
            priceInput.value = cost * numberOfPlate;
            priceInput.focus();
        }
    };

    priceInput.onkeyup = function (event) {
        if (event.code == "Enter" || event.code == "NumpadEnter") {
            priceInput.blur();
        }
    }

    dishes.appendChild(dishInput);
    plates.appendChild(plateInput);
    price.appendChild(priceInput);

}

let totalCalculation = document.querySelector("#total");
totalCalculation.addEventListener("click", totalPrice);

function totalPrice() {
    let arrTotal = document.querySelectorAll("#price .items");
    let totalBill = 0;

    arrTotal.forEach(element => {
        totalBill += parseInt(element.value);
    });


    let str = "Your Total Bill is ₹" + totalBill + " Rupees only/-";
    document.getElementById("result").innerHTML = str;



}

order.forEach(orderNow => {
    orderNow.addEventListener("click", () => {
        // console.log(orderNow);
        let container = orderNow.parentElement;
        // console.log(container);
        let menulist = container.children;
        console.log(menulist[2].innerHTML);

        let dish = menulist[0].innerHTML;
        let cost = menulist[1].querySelector(".p").innerHTML;
        let isorder = menulist[2].innerHTML;
        if (isorder == "order") {

            addDish(dish, cost, isorder);
            menulist[2].innerHTML = "cancel"
            menulist[2].style.backgroundColor="red";
        } else {
            // addDish("", "", isorder);
            menulist[2].innerHTML = "order";
            menulist[2].style.backgroundColor="rgb(0, 60, 255)";
            cancel(dish);

        }


    })
})

function cancel(dish) {
    let a = document.querySelectorAll("#dishes .items")
    let b = document.querySelectorAll("#plates .items")
    let c = document.querySelectorAll("#price .items")


    for (let i = 0; i < a.length; i++) {
        if (a[i].innerHTML == dish) {
            b[i].remove();
            c[i].remove();
            a[i].remove();
            break;
        }
    }

}

let print = document.querySelector("#print");
print.addEventListener("click", 
()=>{
    let display = document.createElement("div");
    let result= document.querySelectorAll("#HOME section .items");
    console.log(result);


});