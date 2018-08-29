let cookies = document.querySelector(".cookies");

window.onload = displayCookie();

function displayCookie() {
  cookies.style.display = "block";
}

function hide() {
  cookies.style.display = "none";
  localStorage.setItem("click", "true"); //store state in localStorage
}

window.onload = function() {
  var click = localStorage.getItem("click");
  if (click === "true") {
    cookies.style.display = "none";
  }
};
