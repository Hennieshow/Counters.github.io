let lowercount = document.querySelector("#lowercount");
let addcount = document.querySelector("#addcount");
let counterValue = document.querySelector("#counterValue");

let counter = 7;

lowercount.addEventListener("click" , ()=> {
    if (counter !=0) {
        counter--;
        counterValue.innerText =counter
    }
})
addcount.addEventListener("click" , ()=> {
    if (counter !=50) {
        counter++;
        counterValue.innerText =counter
    }
})