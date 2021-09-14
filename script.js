var costPrice = document.querySelector("#cost-price");
var stockQuantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var result = document.querySelector("#result");

function validateInput(inputVar){
    if(isNaN(inputVar)){
        result.innerText = "Invalid Input !";
        return false;
    }
    if(inputVar <= 0){
        result.innerText = "All Values should be greater than 0";
        return false;
    }
    return true
}

function checkStatus(){
    var cp = Number(costPrice.value);
    var quantity = Number(stockQuantity.value);
    var sp = Number(currentPrice.value);
    var inp = [cp, quantity, sp];
    for(let i of inp){
        if(!(validateInput(i))){
            result.style.color="black";
            return;
        }
    }
    var msg = "";
    if(cp === sp){
        msg = "No Profit / No Loss";
        result.style.color="black";
        result.innerText = msg;
        return;
    }
    else if(cp > sp){
        msg="Loss";
        var tmp = cp;
        cp = sp;
        sp = tmp;
        result.style.color="red";
    }
    else{
        msg = "Profit";
        result.style.color="green";
    }
    var pnl = ((sp-cp)*quantity).toFixed(2);
    var percentage = (((sp-cp)/costPrice.value)*100).toFixed(2);
    result.innerText = `Total ${msg} : ${pnl} \n ${msg} Percentage : ${percentage}`;
}

submitBtn.addEventListener("click", checkStatus);