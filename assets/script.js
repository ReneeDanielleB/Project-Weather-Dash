//display date
var date = moment().format('dddd, Do MMMM YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS');

//api key & location
const apiKey = "329189c27cff753a7eb98b0d09ef8bcf";
/*const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=329189c27cff753a7eb98b0d09ef8bcf";*/

//Current Weather
function fetchWeather(city) {
	fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
	+ city + "&units=metric&appid=" 
	+ this.apiKey)
	.then((response) => response.json())
	.then((data) => this.displayWeather(data));
};

function displayWeather(data) {
	const { name } = data;
	const { icon, description } = data.weather[0];
	const { temp, humidity } = data.main;
	const { speed } = data.wind;

	console.log(name, icon, description, temp, humidity, speed);

	document.querySelector(".city").innerText = "Weather in" + name;
	document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
	document.querySelector(".description").innerText = description;
	document.querySelector(".temp").innerText =  temp + "°C";
	document.querySelector(".humidity").innerText =  "Humidity:" + humidity + "%";
	document.querySelector(".wind").innerText = speed + "km/h";
};

function search() {
	this.fetchWeather(document.querySelector(".search-input").value);/*searchbar*/
};

document.querySelector(".btn-search").addEventListener("click", function () {
	search()
}); /*search button*/

document.querySelector(".search-input").addEventListener("keyUp", function (event) {
	if (event.key == "Enter") {
		search();
	}
});
fetchWeather("city");

//Search history(place in local storage)
var searchHistory = 
(localStorage.searchHistory) ? JSON.parse(localStorage.searchHistory) : [];
//button class
document.querySelector(".search").addEventListener("click", () => {
	searchHistory.push(document.querySelector(".input").value);//input class
    localStorage.searchHistory = JSON.stringify(searchHistory);
});

document.querySelector(".input").addEventListener("focus", () => {
	var data = document.querySelector("list class");
	data.innerHTML = "";

	searchHistory.forEach((search) => {
		data.innerHTML = "<option>" + data.innerHTML;
		data.querySelector("option").innerText = search;
	});
});

//Retrieve data and display in text box
var result = document.getElementById("search-input")[0].value;

function getCityHistory() {};


//5day Forecast
/*url = "https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={apiKey}"*/
function fetchForecast(city) {
	fetch("https://api.openweathermap.org/data/2.5/forecast?q=" 
	+ city + "&units=metric&appid=" 
	+ this.apiKey)
	.then((response) => response.json())
	.then((data) => this.displayForecast(data));
};

function displayForecast(data) {
	const { name } = data;
	const { icon, description } = data.weather[0];
	const { temp, humidity } = data.main;
	const { speed } = data.wind;

	console.log(name, icon, description, temp, humidity, speed);

	document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
	document.querySelector(".description").innerText = description;
	document.querySelector(".temp").innerText =  temp + "°C";
	document.querySelector(".humidity").innerText =  "Humidity:" + humidity + "%";
	document.querySelector(".wind").innerText = speed + "km/h";
};

function search() {
	this.fetchForecast(document.querySelector(".search-input").value);/*searchbar*/
};

document.querySelector(".btn-search").addEventListener("click", function () {
	search()
}); /*search button*/

document.querySelector(".search-input").addEventListener("keyUp", function (event) {
	if (event.key == "Enter") {
		search();
	}
});
fetchForecast("city");






//search for city weather info



//get current weather data


/*const API_key = "4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498"
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const todayWrapper = document.getElementById("today");
let todayData = document.createElement("div");

const forecast = document.getElementById("forecast");
const historyWrapper = document.getElementById("history");
const data = localStorage.getItem("city-data");
let cityData = data ? JSON.parse(data) : [];

const clearHistory = document.getElementById("clear-history");
todaysForecast.setAttribute("class", "todaysForecast");
*/

//Event listener for search btn

/*var apiKey = '4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498';
var city = "London"

//Current date and time


var cityHistory = [];



/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/london', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log(fetch('https://open-weather13.p.rapidapi.com/city/london'))


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log(fetch('https://open-weather13.p.rapidapi.com/city/fivedaysforcast/30.438/-89.1028'))
*/

/*/fetch data from open weather api
document.querySelector("#search").addEventListener("click", getWeatherData);

function getWeatherData(e) {
    const name = document.querySelector("cityName").value; 

	fetch('url')
	 .then((response) => response.json())
	 .then((data) =>{
		//console.log(data);
		document.querySelector(".searchBox").innerHTML = ""
	 })
	 .catch((err) => {
		console.log("Weather data not retrieved", err);
	 });
    e.preventDefault();
}

getWeatherData()*/

