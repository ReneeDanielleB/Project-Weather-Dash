//Note to self - Decide what method you want to use to fetch weather data & do more research on functions!

//api key & location
url = open weather api
api-key = '4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498'
location = London


//display date




//search for city weather info



//get current weather data


const API_key = "4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498"
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


//Event listener for search btn
searchButton.addEventListener("click"), function (e) {
	e.preventDefault();
	todayWrapper.innerHTML = "";
	forecast.innerHTML = "";
	clearItem();
	
	let city = searchInput.value.trim();
	if (city) {getCity(city); searchInput.value = ""; storeCity(city)}
	else {errorMsg();}
};

//latitude & longitude
async function getCity(city) {
	let response = await fetch("https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}");

	if (response.status === 200) {
		errorMsgCont.classList.add("hide");
		let data = await response.JSON();
		let lon = data[0].lon;
		let lat = data[0].lat;

		getData(lat, lon); cityHistory();
	}
	else {
		errorMsg();
	}
}

function errorMsg() {
	errorMsgCont.classList.remove("hide");
}

//fetch data from weather api
async function getData(lat, lon) {
	let response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric");
	let data = await response.JSON();
	createtodaysForecast(data);
	createForecast(data);
}

//display current weather forecast
function createtodaysForecast(data) {
	todayWrapper.innerHTML += "<"
}










/*var apiKey = '4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498';
var city = "London"

//Current date and time
var date = moment().format('dddd, Do MMMM YYYY');
var dateTime = moment().format('YYYY-MM-DD HH:MM:SS')

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

