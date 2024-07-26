const buttons = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "/",
  "*",
  "C",
  "=",
];

const addButtons = () => {
  let selectBtn = document.querySelector(".selectBtns");
  selectBtn.innerHTML = "";
  let result = "";
  buttons.forEach((value, index) => {
    result += `<button value="${value}" onclick="buttonClicked('${value}')">${value}</button>`;
  });
  selectBtn.innerHTML = result;
};

addButtons();

const buttonClicked = (value) => {
  let input = document.querySelector(".input");

  if (value === "C") {
    input.value = "";
  } else if (value === "=") {
    try {
      const result = eval(input.value);

      input.value = result;
    } catch (e) {
      input.value = "invalid input";
    }
  } else {
    input.value = input.value + value;
  }
};
