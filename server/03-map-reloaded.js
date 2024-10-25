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

console.log(orders);
const totalOrders = orders.map((item) => item.total);
console.log(totalOrders);

//transformar array enviando nueva propiedad
const transform = orders.map((item) => {
	return {
		...item,
		tax: 19,
	};
});
console.log("original", orders);
console.log("transform", transform);

/* const products = [
	{
		name: "Product 1",
		price: 1000,
		stock: 10,
	},
	{
		name: "Product 2",
		price: 2000,
		stock: 20,
	},
];

addNewAttr(products);

function addNewAttr(array) {
	const newArray = array.map((item) => {
		let tax = Math.trunc((item.price * 19) / 100);
		return {
			...item,
			tax: tax,
		};
	});
	console.log(newArray);
}
 */
