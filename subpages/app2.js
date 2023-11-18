const cardNameText = document.querySelector(".card-front-name");
const cardNumberText = document.querySelector(".card-front-number");
const expDateOneText = document.querySelector(".card-expiration-1");
const expDateTwoText = document.querySelector(".card-expiration-3");
const cvcCodeText = document.querySelector(".card-back-cvv-code");

window.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("cardName")) {
    cardNameText.textContent = sessionStorage.getItem("cardName");
  }

  if (sessionStorage.getItem("cardNumber")) {
    cardNumberText.textContent = sessionStorage.getItem("cardNumber");
  }

  if (sessionStorage.getItem("cardExpDate1")) {
    expDateOneText.textContent = sessionStorage.getItem("cardExpDate1");
  }

  if (sessionStorage.getItem("cardExpDate2")) {
    expDateTwoText.textContent = sessionStorage.getItem("cardExpDate2");
  }

  if (sessionStorage.getItem("cvcCode")) {
    cvcCodeText.textContent = sessionStorage.getItem("cvcCode");
  }
});

const successBtn = document.querySelector(".success-continue-btn");

successBtn.addEventListener("click", function () {
  window.location.href = "https://www.linkedin.com/in/chris-l-b7609198/";
});
