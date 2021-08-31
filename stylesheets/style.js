//memory buttons
const eightGB = document.getElementById("eightGB");
const sixteenGB = document.getElementById("sixteenGB");
//storage buttons
const ssd1 = document.getElementById("ssd1");
const ssd2 = document.getElementById("ssd2");
const ssd3 = document.getElementById("ssd3");
//delivery charge
const freeDelivey = document.getElementById("freeDelivery");
const fastDelivery = document.getElementById("fastDelivery");

const memoryCost = document.getElementById("memoryCost");
const ssdCost = document.getElementById("ssdCost");
const deliveryCharge = document.getElementById("deliveryCharge");
const totalPrice = document.getElementById("totalPrice");
const bestPrice = document.getElementById("bestPrice");
const footerTotal = document.getElementById("footerTotal");
const dis20 = document.getElementById("dis20"); //discount coupon

//changing total function
function updateTotal(){
    const basePrice = Number(bestPrice.innerText);
    const memoryCostTotal = Number(memoryCost.innerText);
    const ssdCostTotal = Number(ssdCost.innerText);
    const deliveryChargeTotal = Number(deliveryCharge.innerText);
    const finalTotalPrice = basePrice + memoryCostTotal + ssdCostTotal + deliveryChargeTotal;
    totalPrice.innerText = finalTotalPrice;
    footerTotal.innerText = finalTotalPrice; //footer total changing

    applyButton.addEventListener("click", function(){
        const promoCode = document.getElementById("promoCode");
        const promoValue = promoCode.value;
        if(promoValue == "dis20"){
            const discountPrice = finalTotalPrice - ((finalTotalPrice * 20) / 100);
            footerTotal.innerText = discountPrice;
            
            //if promo code applied successfully
            dis20.innerText = "Coupon applied. You got 20% discount!";
        }
        //if use another code without "dis20"
        else{
            dis20.innerText = "Wrong coupon code*";

        }
    })

}

//eight GB clicked
eightGB.addEventListener("click", function() {
memoryCost.innerText = "00";
updateTotal();
})
//16 GB clicked
sixteenGB.addEventListener("click", function() {
    memoryCost.innerText = "180";
    updateTotal();
})
//256GB SSD card clicked
ssd1.addEventListener("click", function() {
    ssdCost.innerText = "00";
    updateTotal();
})
//512GB SSD card clicked
ssd2.addEventListener("click", function() {
    ssdCost.innerText = "100";
    updateTotal();
})
//1TB SSD card clicked
ssd3.addEventListener("click", function() {
    ssdCost.innerText = "180";
    updateTotal();
})
//Free Delivery clicked
freeDelivey.addEventListener("click", function() {
    deliveryCharge.innerText = "00";
    updateTotal();
})
//Fast delivery clicked
fastDelivery.addEventListener("click", function() {
    deliveryCharge.innerText = "20";
    updateTotal();
})