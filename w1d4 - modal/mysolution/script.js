"use strict";

const button = document.querySelectorAll("article p a");
const hide_button = document.querySelector("#closebutton");

button.forEach(element => {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", showModal);
    console.log(button[i]);

    function showModal() {
      document.getElementById("modal_container").style.display = "block";
      hide_button.addEventListener("click", hideModal);
      console.log("Show modal");
    }

    function hideModal() {
      document.getElementById("modal_container").style.display = "none";
      console.log("Hide modal");
    }
  }
});

console.log(products);
