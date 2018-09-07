let arr = document.querySelectorAll("li");

console.log(arr);

arr.forEach(element => {
  if (element.firstElementChild.innerHTML <= 5) {
    element.remove();
  }
});
