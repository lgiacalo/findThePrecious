const simpson = document.getElementById("simpson");
const buttonReload = document.getElementsByTagName("button")[0];

const figure = document.querySelector("#simpson figure");
const img = figure.querySelector("img");
const blockquote = figure.querySelector("blockquote");
const cite = figure.querySelector("cite");

getSimpson(displaySimpson);

buttonReload.addEventListener("click", function () {
  getSimpson(displaySimpson);
})

function displaySimpson(dataSimpson) {

  img.src = dataSimpson.image;
  img.alt = dataSimpson.character;
  blockquote.innerHTML = dataSimpson.quote;
  cite.innerHTML = dataSimpson.character;
  simpson.style.display = "flex";
}

function getSimpson(callback) {
  axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
    .then(function (response) {
      return response.data[0];
    })
    .then(function (dataSimpson) {
      callback(dataSimpson);
    })
}
