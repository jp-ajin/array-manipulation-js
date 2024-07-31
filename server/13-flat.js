const matiz = [
	[1, 2, 3],
	[4, 5, 6, [1, 2, [3, 4]]],
	[7, 8, 9],
];

const newArray = [];
for (let i = 0; i < matiz.length; i++) {
	const array = matiz[i];
	for (let j = 0; j < array.length; j++) {
		const element = array[j];
		newArray.push(element);
	}
}

console.log(newArray);
const respFlat = matiz.flat(3); //.flat() recibe como parametro el nivel de arreglos
console.log("🚀 ~ respFlat:", respFlat);
