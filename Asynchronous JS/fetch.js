// fetch: most modern way to interact with a web API using AJAX
//		  gets our data and returns a promise, we simply consume it



// - JSON is just like a JS object but it's always a sinlge string
// - CORS: Cross-Origin-Resource-Sharing. Same origin policy of JS, allows to send AJAX request on same domain only, not to other domains. Developers of the APi need to implement CORS on their own server. A hack: Developers requesting the data from an API proxy/channel the request to their own server and then send the data to the browser. We used a service to do exactly that for us!

// .json() method also works in the background(asynchronously) as it can time to parse the json data into JS readable format. Hence, it also returns a promise

function getWeather(woeid) {

	fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
	.then(result => { // data returned by fetch is passed in result argument
		//console.log(result);
		return result.json(); // returns a promise also
	})
	.then(data => { // data argument stores data returned by line 14
		//console.log(data);
		const today = data.consolidated_weather[1];
		console.log(`Temperatures in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
	})
	.catch(error => console.log('Something gone wrong!!'));
}
getWeather(28743736);
getWeather(44418);