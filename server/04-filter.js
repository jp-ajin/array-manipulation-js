//const word = ["spray", "limit", "elite", "exuberant"];

/* const newArray = [];
for (let index = 0; index < word.length; index++) {
	const element = word[index];
	if (element.length >= 6) {
		newArray.push(element);
	}
}

console.log(word, newArray); */

//Sintaxis del metodo filter
/* onst newArray = word.filter((element) => element.length >= 6);
console.log("original", word, "filter", newArray); */

/* Filter con un array de objetos */
const orders = [
	{
		customerName: "Nicolas",
		total: 60,
		delivered: true,
	},
	{
		customerName: "Zulema",
		total: 120,
		delivered: false,
	},
	{
		customerName: "Santiago",
		total: 180,
		delivered: true,
	},
	{
		customerName: "Valentina",
		total: 240,
		delivered: true,
	},
];

// const answer = orders.filter((element) => element.delivered);
// console.log(answer);

// Práctica creando un buscador

const search = (query) => {
	return orders.filter((element) => {
		return element.customerName.includes(query);
	});
};

console.log(search("Nico"));

//////////* Práctica de .filter() */////////

function filterByLength(array) {
	return array.filter((item) => item.length >= 4);
}

filterByLength(["rosa", "gol", "pez", "día", "gafas"]);
filterByLength(["amor", "sol", "piedra", "día,"]);
