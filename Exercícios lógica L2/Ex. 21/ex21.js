function caixaEletronico() {
     entrada = prompt("Digite o valor do saque (mínimo 10 reais, máximo 600 reais):");
     saque = parseInt(entrada);

    if (isNaN(saque) || saque < 10 || saque > 600) {
        console.log("Por favor, insira um valor válido (entre 10 e 600 reais).");
        return;
    }

    notas100 = Math.floor(saque / 100);
    saque %= 100;

    notas50 = Math.floor(saque / 50);
    saque %= 50;

    notas10 = Math.floor(saque / 10);
    saque %= 10;

    notas5 = Math.floor(saque / 5);
    saque %= 5;

    notas2 = Math.floor ( saque / 2);
    saque %= 2;

    notas1 = saque;

    console.log("Notas fornecidas:");
    if (notas100 > 0) console.log(`${notas100} nota(s) de 100 reais`);
    if (notas50 > 0) console.log(`${notas50} nota(s) de 50 reais`);
    if (notas10 > 0) console.log(`${notas10} nota(s) de 10 reais`);
    if (notas5 > 0) console.log(`${notas5} nota(s) de 5 reais`);
    if (notas2 > 0) console.log(`${notas2} nota(s) de 2 reais`);
    if (notas1 > 0) console.log(`${notas1} nota(s) de 1 real`);
}


caixaEletronico();


