/*El método join() une todos los elementos de un array en una cadena
y devuelve esta cadena.
Podemos pasarle cualquier elemento como separador que deseemos.
 */

const elements = ["fire", "air", "water"];

/* let respFinal = "";
for (let i = 0; i < elements.length; i++) {
	const element = elements[i];
	if (i + 1 != elements.length) {
		respFinal = respFinal + element + "--";
	} else respFinal = respFinal + element;
}
console.log(respFinal); */

const resp = elements.join("--");
console.log(resp);

// metodo .split()
// Este metodo divide una cadena de texto en un array segun el caracter escojido
/* const title = "Curso de manipulacion de arrays";

const titleArray = title.split(" ").join("-").toLowerCase();
console.log(titleArray); */

//Playground Construyendo URLs a partir de string
const title = "La API para nunca parar de aprender";

function parseToURL(title) {
	const URL = title.split(" ").join("-").toLowerCase();
	console.log(URL);
}

parseToURL(title);
