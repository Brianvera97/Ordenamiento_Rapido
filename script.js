var matriz = [2, 5, 7, 1, 4, 8, 3, 10, 6, 9, 30, 23, 12, 78, 45, 23]

const quicksort = arr => {
    if (arr.length <= 1) {
        return arr;
    }

    // pivote aleatorio
    const pivotIndex = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotIndex];

    // dividir el array 
    const menores = arr.filter(elemento => elemento < pivot);
    const iguales = arr.filter(elemento => elemento === pivot);
    const mayores = arr.filter(elemento => elemento > pivot);

    // ordenar 
    return [...quicksort(menores), ...iguales, ...quicksort(mayores)];
};

const arregloOrdenado = quicksort(matriz);

console.log(arregloOrdenado);

