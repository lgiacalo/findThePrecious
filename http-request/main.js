const form = document.querySelector("form");
const city = document.getElementById("inputCity");
const apikey = "1839438eda6bf6cb48b8be4c299b34c6";
const divError = document.querySelector("form div.alert");

getMeteo("Marseille");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    getMeteo(city.value.trim());
    city.value = "";
})

function getMeteo(city){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + apikey;

    fetch(url)
        .then(response => response.json(), error => console.log(error))
        .then(json => {
            if (json.cod !== 200)
                throw new Error(json.message);
            divError.classList.add("d-none");
            displayMeteo(city, json);
        })
        .catch(error => {
            divError.innerHTML = error;
            divError.classList.remove("d-none");
        })
}

const imgMeteo = document.querySelector("section.meteo img");
const h5Meteo = document.querySelector("section.meteo h5");
const pMeteo = document.getElementsByClassName("card-text");

function displayMeteo(city, data){
    imgMeteo.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    h5Meteo.innerHTML = city[0].toUpperCase() + city.slice(1);
    pMeteo[0].innerHTML = data.weather[0].main + " - " +  data.weather[0].description;
    pMeteo[1].innerHTML = Math.round(data.main.temp) + "°C";
}

// URL is http://openweathermap.org/img/wn/10d@2x.png
// http://api.openweathermap.org/data/2.5/weather?q=Marseille&appid=1839438eda6bf6cb48b8be4c299b34c6