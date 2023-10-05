// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

/*
function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then((response) => {
      console.log(response);

      if (!response.status)
        throw new Error(`Response Status - ${response.status}`);

      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You're in ${data.city}, ${data.countryName}.`);
    })
    .catch((err) => {
      console.error(`Oops, there's an issue: ${err.message}...`);
    });
}

whereAmI(1, 1);
*/

// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*const imgContainer = document.querySelector(".images");

const createImg = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image could not be loaded"));
    });
  });
};

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

let currentImg;

createImg("https://picsum.photos/900/600")
  .then((res) => {
    currentImg = res;
    console.log(res);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImg("https://picsum.photos/id/1/900/600");
  })
  .then((res) => {
    console.log(res);
    currentImg = res;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err.message));
*/
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const imgContainer = document.querySelector(".images");

const createImg = (imgPath) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", () => {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", () => {
      reject(new Error("Image could not be loaded"));
    });
  });
};

const wait = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

// Part-1
/*(async function () {
  try {
    const res = await createImg("https://picsum.photos/900/600");
    console.log(res);
    await wait(2);
    res.style.display = "none";

    const res2 = await createImg("https://picsum.photos/id/1/900/600");
    console.log(res2);
    await wait(2);
    res2.style.display = "none";
  } catch (error) {
    console.log(`ERROR!!! --- ${error.message} ---- ERROR!!!`);
  }
})();*/

// Part-2
const loadAll = async (...imgArr) => {
  /* createImg returns a promise so we need to await it inside an async fn.
		every async fn returns a promise and not just the resolved value. To get the resolved value we need combinators
	*/
  const imgs = imgArr.map(async (imgPath) => {
    return await createImg(imgPath);
  });
  console.log(imgs); // an array of promises

  const imgsUrl = await Promise.all(imgs); // returns value of promises resolved
  console.log(imgsUrl);
};

loadAll(
  "https://picsum.photos/id/1/900/600",
  "https://picsum.photos/id/200/900/600",
  "https://picsum.photos/id/99/900/600"
);

/*function getWeather(woeid) {

	fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
	.then(result => { // data returned by fetch is passed in result argument
		//console.log(result);
		return result.json(); // returns a promise also
	})
	.then(data => { // data argument stores data returned by line 14
		//console.log(data);
		const today = data.consolidated_weather[1];
		console.log(`Temperatures today in ${data.title} stay between ${today.min_temp} and ${today.max_temp}`);
	})
	.catch(error => console.log('Something gone wrong!!'));
}
getWeather(28743736);
getWeather(44418);


async function getWeatherAW(woeid) {
	try {
		const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
		const data = await result.json();
		const tomorrow = data.consolidated_weather[2];
		console.log(`Temperatures tomorrow in ${data.title} stay between ${tomorrow.min_temp} and ${tomorrow.max_temp}`);
		return data; // whatever is returned from async fn is result of promise produced
	} catch(error) {
		console.log(error);
	}
}

getWeatherAW(28743736);

let dataLondon;
getWeatherAW(44418).then(data => {
	dataLondon = data;
	console.log(dataLondon);
});
*/
