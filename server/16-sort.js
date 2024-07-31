// el metodo .sort() permite ordenar un array y es mutable,
// cambiando el orden del array original

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log("🚀 ~ months:", months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => a - b);
console.log("🚀 ~ numbers:", numbers);

const words = [
	"réservé",
	"premier",
	"communiqué",
	"café",
	"adieu",
	"éclair",
	"banana",
];
words.sort();
console.log("🚀 ~ words:", words);

const orders = [
	{
		customerName: "Nicolas",
		total: 600,
		delivered: true,
	},
	{
		customerName: "Zulema",
		total: 120,
		delivered: false,
	},
	{
		customerName: "Santiago",
		total: 1840,
		delivered: true,
	},
	{
		customerName: "Valentina",
		total: 240,
		delivered: true,
	},
];

//Ordenar por total de compras
orders.sort((a, b) => b.total - a.total);
console.log("🚀 ~ orders:", orders);
