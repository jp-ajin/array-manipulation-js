const letters = ["a", "b", "c"];

/*****Lógica de un forEach con for*****/

for (let index = 0; index < letters.length; index++) {
	const element = letters[index];
	console.log("for", element);
}

//Sintaxis de un forEach
letters.forEach((element) => console.log("forEach", element));
