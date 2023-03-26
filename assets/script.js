//api key & location
const apiKey = "4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498"
const url = ""
location = London

//Current Weather


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

