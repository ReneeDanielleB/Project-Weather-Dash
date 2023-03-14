const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4b3405d416msh98968868bc4e0b1p12b09ajsn475153bcf498',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/landon', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

console.log(fetch('https://open-weather13.p.rapidapi.com/city/landon'))


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


