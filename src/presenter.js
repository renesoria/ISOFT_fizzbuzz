import fizzbuzz from "./fizzbuzz.js";

const numero = document.querySelector("#numero");
const form = document.querySelector("#fizzbuzz-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const num = Number.parseInt(numero.value);

  div.innerHTML = "<p>" + fizzbuzz(num) + "</p>";
});
