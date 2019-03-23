// super/parent class
class Elements {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}

}
// sub-class
class Park extends Elements {
	constructor(name, year, trees, area) {
		super(name, year);
		this.trees = trees;
		this.area = area;
	}

	treeDensity() {
		return this.trees/this.area;
	}

	calculateAge() {
		return (new Date().getFullYear() - this.year);
	}
}
// sub-class
class Street extends Elements {
	constructor(name, year, length, size = 'normal') {
		super(name, year);
		this.length = length;
		this.size = size;
	}
}

// map for street classification
const streetMap = new Map();
streetMap.set(0,'tiny');
streetMap.set(1,'small');
streetMap.set(2,'normal');
streetMap.set(3,'big');
streetMap.set(4,'huge');
//console.log(streetMap);

// creating new objects/instances
let park1 = new Park('Green Park', 1997, 200, 7 );
let park2 = new Park('National Park', 1888, 5000, 10);
let park3 = new Park('Oak Park', 1920, 100, 15);

let street1 = new Street('Ocean Avenue', 1999, 27, streetMap.get(3));
let street2 = new Street('Evergreen Street', 2008, 44, streetMap.get(1));
let street3 = new Street('4th Street', 2015, 10);
let street4 = new Street('Sunset Boulevard', 1982, 55, streetMap.get(4));

let parks = [park1, park2, park3];
let streets = [street1, street2, street3, street4];


// methods
let parkAges = [];
parks.forEach(cur => parkAges.push(cur.calculateAge()));

function averageParkAge(parkAges) {
	let sum = 0;
	for(let i = 0; i < parkAges.length; i++) {
		sum += parkAges[i];
	}
	return (sum / parkAges.length);
} 

function moreThan1000Trees(parks) {
	for(let i = 0; i < parks.length; i++) {
		if(parks[i].trees > 1000)
			return parks[i].name;
	}
}

function totalLength(streets) {
	let sum = 0;
	for(let cur of streets) {
		sum += cur.length;
	}
	return sum;
}

function averageLength(streets) {
	return (totalLength(streets) / streets.length);
}


function printParksReport() {
	console.log(`----------PARKS REPORT---------`);
	console.log(`Our ${parks.length} parks have an average age of ${averageParkAge(parkAges)} years.`)
	parks.forEach(cur => console.log(`- ${cur.name} has a tree density of ${cur.treeDensity()} trees per square km`));
	console.log(`${moreThan1000Trees(parks)} has more than 1000 trees.`)
} printParksReport();

function printStreetsReport() {
	console.log(`----------STREETS REPORT---------`);
	console.log(`Our ${streets.length} streets have a total length of ${totalLength(streets)} km, with an average of ${averageLength(streets)} km.`)
	streets.forEach(cur => console.log(`- ${cur.name}, built in ${cur.year} is a ${cur.size} street.`));
} printStreetsReport();