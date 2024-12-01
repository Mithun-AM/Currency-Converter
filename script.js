const BASE_URL = `https://api.frankfurter.dev/v1/latest?base=`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select.name === "from" && currCode === "USD"){
            newOption.selected="selected";
        }else if(select.name === "to" && currCode === "INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateExchange = async () =>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(fromCur.value === toCur.value){
        msg.innerHTML = `Enter different currency`;
    }
    else if(amtVal === " " && amtVal < 0){
        msg.innerText = "Enter Valid Numbers";
    }else{

        try{
            const URL = `${BASE_URL}${fromCur.value}&symbols=${toCur.value}`;
            let response = await fetch(URL);
            let data = await response.json();
            // console.log(data.rates[toCur.value]);
            let finalAmt = data.rates[toCur.value] * amtVal
            msg.innerText = `${amtVal} ${fromCur.value} = ${finalAmt.toFixed(5)} ${toCur.value}`;
        }catch (error) {
            console.error(error);
            msg.innerText = "Unable to find this conversion"
        }
    }
}

const updateFlag = (element) =>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
    updateExchange();
};

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    updateExchange();
})

window.addEventListener("load",() =>{
    updateExchange();
})