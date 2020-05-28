// Global Variables 

const currencyBtn = document.querySelector(".currency-btn");

// Event Listeners

currencyBtn.addEventListener("click", currencyBtnClick);

function currencyBtnClick(event) {
    currencyBtn.classList.toggle("open");
}