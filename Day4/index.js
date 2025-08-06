const inputAge = document.getElementById("date-id");
const btn = document.querySelector(".btn");
const output = document.querySelector(".final-age");

function display() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  let str = inputAge.value.split("-");
  const age = currentYear - str[0];
  output.innerHTML = `Your age is ${age} years old`;
}

btn.addEventListener("click", display);
