const numbers = [1, 2, 3, 4];

// metodo .some() usando un for
/*let resp = false;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element % 2 === 0) {
		resp = true;
		break;
	}
}
console.log(resp);*/

// sintaxis del metodo .some()
/*const resp = numbers.some((item) => item % 2 === 0);
console.log(resp);*/

//metodo .some() usando objetos
const data = [
	{
		name: "Nicolas",
		level: "low",
		delivered: false,
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

const resp = data.some((item) => item.delivered);
console.log(resp);
