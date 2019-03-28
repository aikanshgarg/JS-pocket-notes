/*const first = () => {
	console.log('Hey there...');
	setTimeout(() => {
		console.log('Async!')
	}, 5000);
}

const second = () => {
	console.log('The end.');
}

first();
second();*/


function getPlayer() {

	setTimeout(() => {
		const jerseyNumber = [18, 7, 15, 45, 10];
		console.log(jerseyNumber);

		setTimeout(number => {
			const player = {
				name: 'Sachin Tendular',
				state: 'Mumbai',
				aka: 'Master Blaster'
			};
			console.log(`${player.name}, also known as ${player.aka}, hails from ${player.state}`);

			setTimeout(state => {
				const player2 = {
					name: 'Rohit Sharma',
					state: 'Mumbai',
					aka: 'Hitman'
				};
				console.log(`${player2.name}, also known as ${player2.aka}, hails from ${player2.state}`);
			}, 1500);

		}, 1500, jerseyNumber[10]);

	}, 2000);
}
getPlayer();


// const getIDs = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve([18, 7, 15, 45, 10]);
// 	}, 1500);
// });

// const getPlayer = playerID => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout((ID) => {
// 			const player = {
// 				name: 'Sachin Tendular',
// 				state: 'Mumbai',
// 				aka: 'Master Blaster'
// 			};
// 			resolve(`${player.name}(${ID}), also known as ${player.aka}, hails from ${player.state}.`);
// 		}, 1500, playerID);
// 	});
// };

// const getStatePlayer = state => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout((sameState) => {
// 			const player2 = {
// 				name: 'Rohit Sharma',
// 				aka: 'Hitman'
// 			};
// 			resolve(`${player2.name} also hails from ${sameState}.`);
// 		}, 1000, state);
// 	});
// };


/*getIDs
	.then(IDs => {
		console.log(IDs);
		return getPlayer(IDs[4]);
	})
	.then(player1 => {
		console.log(player1);
		return getStatePlayer('Mumbai'); // string returned from line 73 
	})
	.then(player2 => {
		console.log(player2);
	});*/

// async function getPlayerAW() {
// 	const IDs = await getIDs;
// 	console.log(IDs);
// 	const player = await getPlayer(IDs[4]);
// 	console.log(player);
// 	const related = await getStatePlayer('Mumbai');
// 	console.log(related);

// 	const city = 'Mumbai'

// 	return city;
// }

// //const pending = getPlayerAW();
// //console.log(pending);
// getPlayerAW()
// 	.then(related => {
// 		console.log(`${related} Indians have many great batsmen in their IPL team as well!`);
// 	});
