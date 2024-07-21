// const numbers = [1, 30, 49, 29, 10, 13];

/* let resp = true;
for (let i = 0; i < numbers.length; i++) {
	const element = numbers[i];
	if (element >= 40) {
		resp = false;
	}
}

console.log(resp); */

//Sintaxis del metodo .every()
/* const resp = numbers.every((item) => item <= 40);
console.log(resp); */

//practica con objeto
/* const team = [
	{
		name: "Nicolas",
		age: 12,
	},
	{
		name: "Andrea",
		age: 8,
	},
	{
		name: "Zulema",
		age: 2,
	},
	{
		name: "Santiago",
		age: 18,
	},
];

const resp = team.every((item) => item.age <= 15);
console.log(resp); */

//Practica del metodo .every()
const numbers = [2, 4, 6, 8];

function checkArray(array) {
	if (array.length != 0) {
		const resp = array.every((item) => item % 2 === 0);
		console.log(resp);
	} else console.log(false);
}

checkArray(numbers);
