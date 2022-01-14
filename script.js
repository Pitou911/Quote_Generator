const getBtn = document.querySelector(".btn");
const des = document.querySelector(".quote");
const author = document.querySelector(".author");
const getQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      des.innerHTML = data.content;
      author.innerHTML = `" ${data.author} "`;
    });
};
getBtn.addEventListener("click", getQuote);
