// Card input details
const cardInput = document.querySelector(".card-details-form");
const cardName = document.querySelector(".cardholder-name-input");
const cardNumber = document.querySelector(".card-number-input");
const expDateOne = document.querySelector(".expiration-date-1-input");
const expDateTwo = document.querySelector(".expiration-date-2-input");
const cvcCode = document.querySelector(".cvc-code-input");

// Card display details
const cardNameText = document.querySelector(".card-front-name");
const cardNumberText = document.querySelector(".card-front-number");
const expDateOneText = document.querySelector(".card-expiration-1");
const expDateTwoText = document.querySelector(".card-expiration-3");
const cvcCodeText = document.querySelector(".card-back-cvv-code");

cardName.addEventListener("keyup", () => {
  const cardNameValue = cardName.value;

  cardNameText.textContent = cardNameValue;

  if (cardName.value.length === 0) {
    cardNameText.textContent = `chrislwebdev@gmail.com`;
  }

  if (cardNameValue.length >= 21) {
    const cardNameShortened = cardNameValue.slice(0, 20);
    cardNameText.textContent = `${cardNameShortened}...`;
  }
});

var digitPeriodRegExp = new RegExp("\\d|\\.");

cardNumber.addEventListener("keyup", (e) => {
  const cardNumberValue = cardNumber.value;

  if (cardNumber.value.length === 0) {
    cardNumberText.textContent = `4815 1623 4248 1516`;
  } else {
    const valuesofInput = e.target.value.replaceAll(" ", "");

    if (e.target.value.length > 14) {
      e.target.value = valuesofInput.replace(
        /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
      cardNumberText.innerHTML = valuesofInput.replace(
        /(\d{4})(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3 $4"
      );
    } else if (e.target.value.length > 9) {
      e.target.value = valuesofInput.replace(
        /(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3"
      );
      cardNumberText.innerHTML = valuesofInput.replace(
        /(\d{4})(\d{4})(\d{0,4})/,
        "$1 $2 $3"
      );
    } else if (e.target.value.length > 4) {
      e.target.value = valuesofInput.replace(/(\d{4})(\d{0,4})/, "$1 $2");
      cardNumberText.innerHTML = valuesofInput.replace(
        /(\d{4})(\d{0,4})/,
        "$1 $2"
      );
    } else {
      cardNumberText.innerHTML = valuesofInput;
    }
  }

  if (cardNumber.value.length > 19) {
    const cardNumberSliced = cardNumber.value.slice(0, 19);
    cardNumber.value = cardNumberSliced;

    const cardTextSliced = cardNumberText.textContent.slice(0, 19);
    cardNumberText.textContent = cardTextSliced;
  }

  // if(e.ctrlKey || e.altKey || typeof e.key !== 'string' || e.key.length !== 1) {
  //     return;
  // }

  // if(!digitPeriodRegExp.test(e.key)) {
  //     e.preventDefault();
  // }
});

cardNumber.addEventListener(
  "keydown",
  function (e) {
    if (
      e.ctrlKey ||
      e.altKey ||
      typeof e.key !== "string" ||
      e.key.length !== 1
    ) {
      return;
    }

    if (!digitPeriodRegExp.test(e.key)) {
      e.preventDefault();
    }
  },
  false
);

expDateOne.addEventListener("keydown", function (e) {
  if (expDateOne.value.length > 1 && e.key.length === 1) {
    e.preventDefault();
  }
});

expDateOne.addEventListener("keyup", function () {
  expDateOneText.textContent = expDateOne.value;

  if (expDateOne.value.length === 0) {
    expDateOneText.textContent = `00`;
  }

  if (expDateOne.value.length === 1) {
    expDateOneText.textContent = `${expDateOne.value} `;
  }
});

expDateTwo.addEventListener("keydown", function (e) {
  if (expDateTwo.value.length > 1 && e.key.length === 1) {
    e.preventDefault();
  }
});

expDateTwo.addEventListener("keyup", function (e) {
  expDateTwoText.textContent = expDateTwo.value;

  if (expDateTwo.value.length === 0) {
    expDateTwoText.textContent = `00`;
  }

  if (expDateTwo.value.length === 1) {
    expDateTwoText.textContent = `${expDateTwo.value}0`;
  }
});

cvcCode.addEventListener("keydown", function (e) {
  if (cvcCode.value.length > 2 && e.key.length === 1) {
    e.preventDefault();
  }
});

cvcCode.addEventListener("keyup", function (e) {
  cvcCodeText.textContent = cvcCode.value;

  if (cvcCode.value.length === 0) {
    cvcCodeText.textContent = `000`;
  }
});

cardInput.addEventListener("paste", function (e) {
  e.preventDefault();
});

cardInput.addEventListener("submit", function (e) {
  e.preventDefault();

  if (cardName.value.length === 0) {
    e.preventDefault();
    const cardNameError = document.querySelector(".card-details-error");
    cardNameError.classList.add("element-visible");
    setTimeout(function () {
      cardNameError.classList.remove("element-visible");
    }, 3000);

    return;
  }

  if (cardNumber.value.length < 19) {
    console.log(`Number less than 16`);
    e.preventDefault();
    const cardNumberError = document.querySelector(".card-number-error");
    cardNumberError.classList.add("element-visible");
    setTimeout(function () {
      cardNumberError.classList.remove("element-visible");
    }, 3000);

    return;
  }

  if (expDateOne.value.length < 2 || expDateOne.value.length > 2) {
    const cardDate1Error = document.querySelector(".card-date-1-error");
    cardDate1Error.classList.add("element-visible");
    setTimeout(function () {
      cardDate1Error.classList.remove("element-visible");
    }, 3000);

    return;
  }

  var options = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  var choice = expDateOne.value;

  if (options.indexOf(choice) === -1) {
    e.preventDefault();
    const cardDate1Error = document.querySelector(".card-date-1-error");
    cardDate1Error.classList.add("element-visible");
    setTimeout(function () {
      cardDate1Error.classList.remove("element-visible");
    }, 3000);

    return;
  }

  if (
    expDateTwo.value.length < 2 ||
    expDateTwo.value.length > 2 ||
    expDateTwo.value < 23
  ) {
    e.preventDefault();
    const cardDate2Error = document.querySelector(".card-date-2-error");
    cardDate2Error.classList.add("element-visible");
    setTimeout(function () {
      cardDate2Error.classList.remove("element-visible");
    }, 3000);

    return;
  }

  if (cvcCode.value.length < 3 || cvcCode.value.length > 3) {
    e.preventDefault();
    const cvcCodeError = document.querySelector(".cvc-code-error");
    cvcCodeError.classList.add("element-visible");
    setTimeout(function () {
      cvcCodeError.classList.remove("element-visible");
    }, 3000);

    return;
  }

  sessionStorage.setItem("cardName", cardName.value);
  sessionStorage.setItem("cardNumber", cardNumber.value);
  sessionStorage.setItem("cardExpDate1", expDateOne.value);
  sessionStorage.setItem("cardExpDate2", expDateTwo.value);
  sessionStorage.setItem("cvcCode", cvcCode.value);

  window.location.href = "./subpages/success.html";
});
