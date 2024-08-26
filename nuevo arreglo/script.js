function nuevoArreglo(numero) {
    let arreglo = [];
    for (let i = 1; i <= numero; i++) {
    arreglo.push(i);
    }
    return arreglo;
}


console.log(nuevoArreglo(5));
console.log(nuevoArreglo(10));
