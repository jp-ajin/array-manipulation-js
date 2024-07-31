const users = [
	{ userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
	{ userId: 2, username: "Mike", attributes: ["Lovely"] },
	{ userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

//Tener un array completo de los usuarios

const respMap = users.map((user) => user.attributes).flat();
// console.log(respMap);

//Usando el metodo .flatmap()
const respFlatMap = users.flatMap((user) => user.attributes);
// console.log(respFlatMap);

// reto retornar un objeto con las startDate

const calendars = {
	primaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 15),
			endDate: new Date(2021, 1, 1, 15, 30),
			title: "Cita 1",
		},
		{
			startDate: new Date(2021, 1, 1, 17),
			endDate: new Date(2021, 1, 1, 18),
			title: "Cita 2",
		},
	],
	secondaryCalendar: [
		{
			startDate: new Date(2021, 1, 1, 12),
			endDate: new Date(2021, 1, 1, 12, 30),
			title: "Cita 2",
		},
		{
			startDate: new Date(2021, 1, 1, 9),
			endDate: new Date(2021, 1, 1, 10),
			title: "Cita 4",
		},
	],
};

const rtaReto = Object.values(calendars)
	.flat()
	.map((item) => item.startDate);
// console.log(rtaReto);

//Playground
array = [
	"Beautiful is better than ugly",
	"Explicit is better than implicit",
	"Simple is better than complex",
	"Complex is better than complicated",
];

function countWords(array) {
	const resp = array.flatMap((item) => item.split(" ")).length;
	console.log("🚀 ~ countWords ~ resp:", resp);
}

countWords(array);
