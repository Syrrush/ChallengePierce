// Ejercicio de Lógica de Programación: Encuentra el Número Perdido

// Descripción:
// Dado un conjunto de números enteros del 1 al N, donde N es un número impar mayor o igual
// a 3, todos los números están presentes dos veces, excepto uno. Tu tarea es encontrar ese
// número único.

// Ejemplo:
// Si tenemos el conjunto {1, 3, 2, 4, 2, 1, 3}, el número único es 4, ya que aparece solo una vez.

// Instrucciones:

// Escribe un algoritmo en pseudo lenguaje o javascript, para encontrar el número único
// en un conjunto dado.
// Utiliza estructuras de control de flujo, como bucles y condiciones, para implementar
// tu algoritmo.
// Asegúrate de manejar casos donde el conjunto de números sea válido (cumple con
// las condiciones descritas) y proporcione un resultado correcto.

//   -----------------------------------------------------------------------------------------------------------------------

// Adjunto este codigo que fue el primero que hice, volcando lo primero que se me ocurrió.
// Sin embargo, luego de terminarlo, me di cuenta que no era muy optimo, ya que segun la Big O Notation que nos dice la optimización
// Veo que tiene una eficiencia de n^2 y eso podría generar que se torne lento mientras mas cantidad de datos se tenga.
// Por lo que, luego hice una version optimizada y es allí donde responderé las preguntas:
// O(n^2)
const getUnique = (arr) => {
    const unique = [];
    let longer = 1
    for (let num of arr) {
        let ind = unique.findIndex(element => element === num);

        if (longer < num) longer = num

        if (ind !== -1) {
            unique.splice(ind, 1);
        } else {
            unique.push(num);
        }
    }
    if (longer % 2 === 0 || longer < 3) return "No cumple con las condiciones descriptas sobre N"
    return `The unique number is ${unique}`
}
// const test = getUnique(arr)
// console.log(test);


//  -------------------------------------------------------------------------------------------------------------------


// O(n)
const getUniqueOptimized = (arr) => {
    const frequency = {};
    let longer = 1
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (longer < num) longer = num
    }

    if (longer % 2 === 0 || longer < 3) return "Does not meet the conditions described for 'N'"

    const unique = Object.keys(frequency).filter(key => frequency[key] === 1);

    return unique.length > 1 ? "Two or more numbers are unique" : `The unique number is ${(unique)}`
}


// ----------------- Array con solo 1 numero "único" -----------------
const arr = [1, 1, 3, 3, 5, 5, 7, 9, 9, 11, 11, 13, 13];
// ----------------- Array con 2 numeros "únicos" -----------------
// const arr = [1, 1, 3, 3, 5, 5, 7, 9, 9, 11, 11, 13, 13, 15];
// ----------------- Array con N par -----------------
// const arr = [1, 1, 3, 3, 5, 5, 7, 9, 9, 11, 11, 13, 13, 14];

const testOptimized = getUniqueOptimized(arr)
console.log(testOptimized);

// Preguntas para el Resolver:

// ¿Cómo abordaste el problema?

// La primera vez lo aborde desde una manera practica, solo utilizando las cosas que conocía para obtener el resultado deseado
// pero luego pensé en una manera de resolverlo pero que sea óptimo, en ese caso, con solo un recorrido del array debería tener la
// mayor cantidad de datos posibles y luego encargarme de las validacioones. Por lo que pensé en un "for of" donde obtenia la
// cantidad de veces que aparecian los numeros y al mismo tiempo el numero mayor (llamado "N"). Luego solamente me encargué
// de realizar las validacioes pertinentes.

//                    ----------------------------------------------------------------------------------------------

// ¿Qué estrategia utilizaste para identificar el número único?

// La estrategia que usé es buscar la frecuencia con la que aparecían los números y luego buscar el cual no se repetía, es decir,
// que tenga frecuencia de 1.

//                    ----------------------------------------------------------------------------------------------

// ¿Cómo manejas los casos donde el conjunto no cumple con las condiciones?
// Los casos donde el conjunto no cumple con las condiciones, las manejo con un condicional "if" para el cumplimiento de las
// características de "N" y luego mediante el uso de un ternario al retornar, donde obtenemos distintos mensajes dependiendo
// de la cantidad de numeros únicos que tengamos.
// De igual manera, me centré solamente en realizar las validaciones solicitadas en el challenge...
// Ya que de no ser así, habrían varias más que se podrían realizar y tampoco quería que parezca un código
// extremadamente largo y complejo para algo sencillo, porque si nos encontraramos en una situación "real"
// habrían filtros que se realizarían en otros sectores y no recaería todo en esta función.
// Las otras validaciones que se podrían hacer son: el tipo de parámetro que estamos recibiendo (que sea un array para que se
// pueda trabajar mejor); que los elementos dentro del mismo sean números; que los números solo estén dos veces y no más ( ya que
// en realidad nuestro objetivo es encontrar el número único, por ende, no era tan imprescindible de hacerlo), etc.