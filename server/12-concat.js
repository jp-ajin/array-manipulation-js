// método inmutable, no modifica el array original
// genera uno nuevo

const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

//metodo .concat() usando un for
const newArray = [...elements]; // split operation
for (let i = 0; i < othersElements.length; i++) {
	const elements = othersElements[i];
	newArray.push(elements);
}

console.log(newArray);

//sintaxis metodo .concat()
const resp = elements.concat(othersElements);
console.log("🚀 ~ resp:", resp);

// concat usando split operation
const respSplit = [...elements, ...othersElements];
console.log("🚀 ~ respSplit:", respSplit);

//modificando el array original elements

elements.push(...othersElements);
console.log(elements);
