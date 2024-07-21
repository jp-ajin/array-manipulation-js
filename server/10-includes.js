//El método .includes() determina si una array incluye un determinado elemento,
//Devuelve true o false según corresponda.

const pets = ["gato", "perro", "pollo"];

//metodo .includes() hecho con un for
/* let includeInArray = false;
for (let i = 0; i < pets.length; i++) {
	const element = pets[i];
	if (element === "perro") {
		includeInArray = true;
		break;
	}
}

console.log(includeInArray);
 */

// sintaxis del metodo .includes()
/* const resp = pets.includes("perro");
console.log(resp);
 */

// Playground Buscador de palabras con parametros de busqueda

const array = ["ana", "santi", "nico", "anastasia"];
const term = "xyz";

function filterByTerm(array, term) {
	return array.filter((item) => item.includes(term));
}

filterByTerm(array, term);
