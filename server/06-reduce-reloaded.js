/*const items = [1, 3, 2, 3];

const resp = items.reduce((obj, item) => {
	if (!obj[item]) {
		obj[item] = 1;
	} else {
		obj[item] = obj[item] + 1;
	}
	return obj;
}, {});

console.log(resp);*/

//metodo .reduce() usando objetos
/*const data = [
	{
		name: "Nicolas",
		level: "low",
	},
	{
		name: "Andrea",
		level: "medium",
	},
	{
		name: "Zulema",
		level: "hight",
	},
	{
		name: "Santiago",
		level: "low",
	},
	{
		name: "Valentina",
		level: "medium",
	},
	{
		name: "Lucia",
		level: "hight",
	},
];

const resp = data
	.map((item) => item.level)
	.reduce((obj, item) => {
		if (!obj[item]) {
			obj[item] = 1;
		} else {
			obj[item] = obj[item] + 1;
		}
		return obj;
	}, {});

console.log(resp);*/

const numbers = [2, 4, 8];

function calcSum(numbers) {
	const initialValue = 0;
	const suma = numbers.reduce(
		(acumulator, currentValue) => acumulator + currentValue,
		initialValue
	);
	console.log("La suma es: ", suma);
}

calcSum(numbers);
