
// const second = () => {
// 	setTimeout( () => {
// 		console.log('Async here!');
// 	} , 2000);
// };

// const first = () => {
// 	console.log('Hey!');
// 	second();
// 	console.log('Am I too fast?');
// };

// first();


/*-------------CALLBACK HELL-----------------------------------------------------------------------------------------------------*/

//- Simulating data received (AJAX call) from the server with setTimeout()
// function getRecipe() {
// 	setTimeout( () => {
// 		const recipeID = [523, 887, 432, 984]; // IDs received from the server
// 		console.log(recipeID);

// 		setTimeout(id => { // our selected recipe ID brings the data(recipe) for that ID
// 			const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
// 			console.log(`${id}: ${recipe.title}`);

// 			setTimeout(publisher => { // getting another recipe from same publisher
// 				const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
// 				console.log(recipe);
// 			}, 1000, recipe.publisher)

// 		}, 1000, recipeID[2]); // third argument here is passed to the callback fn of this setTimeout, recipeID[2]=432 is passed to id arg at line 25

// 	}, 1500);
// }

// getRecipe();











/*-------------PROMISES----------------------------------------------------------------------------------------------------------*/

// - a callback fn(executor) is called whenever a promise is created 
// - resolve/reject, the two args, are fns as well
// - then/catch are two methods for consuming promises
// - HOW IT DEALS WITH CALLBACK HELL: 'CHAINING'

const getIDS = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve([523, 887, 432, 984]); // calling this fn when promise is fulfilled. 
	}, 1500);
});

// fn which receives an ID and returns a promise
const getRecipe = recID => {
	return new Promise((resolve, reject) => {
		setTimeout(ID => { 
			const recipe = {title: 'Fresh tomato pasta', publisher: 'Jonas'};
			resolve(`${ID}: ${recipe.title}`); 
		}, 1500, recID); // recID value is passed to ID at line 67
	});
};

// fn which receives a recipe and returns another recipe from same publisher
const getRelated = publisher => {
	return new Promise((resolve, reject) => {
		setTimeout(pub => {
			const recipe = {title: 'Italian Pizza', publisher: 'Jonas'};
			resolve(`${pub}: ${recipe.title}`);
		}, 1500, publisher); // publisher value is passed to pub at line 77
	});
}


// argument passed into the callback fn of 'then' method is the result which we want when our promise to be resolved
getIDS
.then(IDs => { // callback fn is passed(event handler)
	console.log(IDs); // data from line 60
	return getRecipe(IDs[2]); // passed to line 65 recID arg
})
.then(recipe => { // chaining
	console.log(recipe); // data from line 69
	return getRelated(`Aikansh`); // passed to line 75 publisher arg
})
.then(recipe => {
	console.log(recipe); // data from line 79
})  
// argument passed into the callback fn of 'error' method is the result which we want when our promise to be rejected
.catch(error => {
	console.log('Error!!');
});