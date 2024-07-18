const totals = [1, 2, 3, 4];

// metodo reduce con for
let sum = 0;
for (let i = 0; i < totals.length; i++) {
	const element = totals[i];
	sum = sum + element;
}

console.log(sum);

// metodo reduce sintaxis
const resp = totals.reduce((sum, element) => sum + element, 0);
console.log("resp:", resp);
