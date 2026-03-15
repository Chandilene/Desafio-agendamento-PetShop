import { phoneMask } from "../../utils/phone-mask.js";

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", (event) => {
  event.target.value = phoneMask(event.target.value);
});
