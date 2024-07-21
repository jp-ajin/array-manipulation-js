//A diferencia del metodo filter que devuelve un array con los item encontrados
//Este metodo devuleve solo el primero encontrado

const numbers = [1, 30, 49, 29, 10, 13];

/* let resp;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element === 30) {
		resp = element;
		break;
	}
}

console.log(resp); */

//sintaxis del metodo .find()
/* const resp = numbers.find((item) => item === 30);
console.log(resp); */

const products = [
	{
		name: "Pizza",
		price: 12,
		id: "🍕",
	},
	{
		name: "Burger",
		price: 23,
		id: "🍔",
	},
	{
		name: "Hot dog",
		price: 34,
		id: "🌭",
	},
	{
		name: "Hot cakes",
		price: 355,
		id: "🥞",
	},
];

const resp = products.find((item) => item.id === "🍔");
console.log(resp);

//usando el metodo .findIndex() que devuelve la posicion
const respIndex = products.findIndex((item) => item.id === "🍔");
console.log(respIndex);
