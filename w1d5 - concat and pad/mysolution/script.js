let pattern = "image#.jpg";
let number = 3;

let arr = pattern;

console.log(arr.length);

let tag = arr.indexOf("#");

console.log(tag);

function replace(arr, search, replace) {
  for (let i = 0; i > arr.length; i++) {
    if (arr[i] === search) {
      arr[i] = replace;
    }
  }
}

replace(arr, "#", number);

console.log(arr);
