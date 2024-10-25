const letter = ["a", "b", "c"];

/****Lógica del Map con un for****/
const newArray = [];

for (let index = 0; index < letter.length; index++) {
	const element = letter[index];
	newArray.push(element + "++");
}
console.log("original", letter);
console.log("new", newArray);

/*****Sintaxis del método map****/
/* const newArray = letter.map((item) => item + "++");
console.log("original", letter)
console.log("new", newArray); */
