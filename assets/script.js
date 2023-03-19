//Note to self - Decide what method you want to use to fetch weather data & do more research on functions!

//api key & location
/*url = open weather api
api-key = '4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498'
location = London*/


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
	todayWrapper.innerHTML += 
	//code changed to jsx syntax - issue needs to resolved
	/*<div class="d-flex align-items-center">
		<h2>${data.city.name} (${data.city.country})</h2>
		<img src="${getImageUrl(data.list[0].weather[0].icon)"
		alt="${data.list[0].weather[0].description}"></img>
	</div>
	  <h3>
		 ${dayjs().format("dddd D MMM YYYY")}
	  </h3>
	  <p>Temperature: ${Math.floor(data.list[0].main.temp)}&degc</p>
	  <p>Humidity: ${Math.floor(data.list[0].main.humidity)}%</p>
	  <p>Wind: ${Math.floor(data.list[0].main.wind.speed)} KPH</p>;*/
 todayWrapper.appendChild(todaysForecast);
}

//5 day forecast
function createForecast(data) {
	let lastDayTime = timeOfDay(data.list);
	let today = dayjs().format("DD");

	for (var i = 0; i < data.list.length; i++) {
		let day = data.list[i];
		let futureDay = dayjs(day.dt_txt).format("DD");
		let dayTime = dayjs(day.dt_txt).format("HH:mm");
		let setTime = "12:00";

		if (futureDay > today) {
			if (futureDay == +today + 1) {
				if (dayTime === setTime) {
					createForecastData(day);
				}
			}

			if (futureDay == +today + 2) {
				if (dayTime === setTime) {
					createForecastData(day);
				}
			}

			if (futureDay == +today + 3) {
				if (dayTime === setTime) {
					createForecastData(day);
				}
			}

			if (futureDay == +today + 4) {
				if (dayTime === setTime) {
					createForecastData(day);
				}
			}

			if (futureDay == +today + 5) {
				if (dayTime === setTime) {
					createForecastData(day);
				}
			}
		}
	}
}

//clear card to display new city
function clearItem() {
	todaysForecast.innerHTML ="";
}

//display icon for each weather card(url)
function getImageUrl(icon) {
	return "http://openweathermap.org/img/wn/${icon}@2x.png";
}

//implement local storage
function storeCity(city) {
	let newCity = {name: city};

	cityData.push(newCity);
	localStorage.setItem("city-data", JSON.stringify(cityData));
}

//display stored data as history
function cityHistory() {
	let cityHistory = JSON.parse(localStorage.getItem("city-data")) [];

	if (cityHistory.length > 0) {
		clearHistory.classList.remove("hide");
		historyWrapper.innerHTML ="";
		forecast.innerHTML = "";
		historyWrapper += cityHistory.map(
			(cityName) =>
			`<button id = "cityBtn" data-id = "${cityName.name}" 
			class = "btnbtn-secondary mt-2 mb-2"> ${upperCase(cityName.name)}
			</button>`
		)
		.join("");
	}
	for (let i = 0; i < cityBtn.length; i++) {
		let eachBtn = cityBtn[i];
		let dataId = eachBtn.dataset.id;

		eachBtn.addEventListener("click", () => {
			clearItem(); getCity(dataId);
		});
	}
}
cityHistory();


function 

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

