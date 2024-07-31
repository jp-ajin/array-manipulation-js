const products = [
	{ title: "Pizza", price: 121, id: "🍕" },
	{ title: "Burger", price: 121, id: "🍔" },
	{ title: "Hot cakes", price: 121, id: "🥞" },
];

const myProducts = [];

//Busqueda
const productIndex = products.findIndex((item) => item.id === "🍔");
if (productIndex !== -1) {
	myProducts.push(products[productIndex]);
	//borrar un elemento del array con el metodo .splice()
	products.splice(productIndex, 1);
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

//Update
const productsV2 = [
	{ title: "Pizza", price: 121, id: "🍕" },
	{ title: "Burger", price: 121, id: "🍔" },
	{ title: "Hot cakes", price: 121, id: "🥞" },
];

const update = {
	id: "🥞",
	changes: {
		price: 200,
		description: "delicious",
	},
};
const productIndex2 = productsV2.findIndex((item) => item.id === update.id);
productsV2[productIndex2] = {
	...productsV2[productIndex2],
	...update.changes,
};
console.log(productsV2);
