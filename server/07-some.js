// const numbers = [1, 2, 3, 4];

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
/* const data = [
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
 */

const dates = [
	{
		startDate: new Date(2021, 1, 1, 10),
		endDate: new Date(2021, 1, 1, 11),
		title: "Cita de trabajo",
	},
	{
		startDate: new Date(2021, 1, 1, 15),
		endDate: new Date(2021, 1, 1, 15, 30),
		title: "Cita de mi jefe",
	},
	{
		startDate: new Date(2021, 1, 1, 20),
		endDate: new Date(2021, 1, 1, 21),
		title: "Cena",
	},
];

//Libreria date-fns para comprobar si dos fechas colisionan entre si
//npm install date-fns
const { areIntervalsOverlapping } = require("date-fns");

const newAppointment = {
	startDate: new Date(2021, 1, 1, 8),
	endDate: new Date(2021, 1, 1, 9, 30),
};

const isOverlap = (newDate) => {
	return dates.some((date) => {
		return areIntervalsOverlapping(
			{ start: date.startDate, end: date.endDate },
			{ start: newDate.startDate, end: newDate.endDate }
		);
	});
};

console.log(isOverlap(newAppointment));

//Practica
const numbers = [1, 3, 5, 7, 11];

function checkArray(numbers) {
	return numbers.some((item) => item % 2 === 0);
}

checkArray(numbers);
