window.addEventListener("load", () => {
  const template = document.querySelector("#template").content;
  main = document.querySelector("main");

  fetch("https://kea-alt-del.dk/twitter/api/?hashtag=es6")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      data.statuses.forEach(showTweet);
    });

  function showTweet(tweet) {
    const clone = template.cloneNode(true);
    clone.querySelector("h3").textContent = tweet.text;
    clone.querySelector("h1").textContent = tweet.user.screen_name;
    main.appendChild(clone);
  }
});
