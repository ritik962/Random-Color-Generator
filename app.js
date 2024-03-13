const btnEl = document.querySelector("#btn");
const colorCode = document.querySelector("#code");
const body = document.querySelector("body");

const randomColor = () => {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  console.log(randomCode);
  console.log(randomNumber);
  colorCode.innerText = randomCode;
  body.style.backgroundColor = randomCode;
};

btnEl.addEventListener("click", randomColor);
