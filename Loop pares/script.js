

function loopDePares(numero) {
    for (let i = 0; i <= 100; i++) {
    if ((i + numero) % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(i);
    }
}
}

loopDePares(3);