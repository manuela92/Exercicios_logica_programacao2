n=parseFloat(prompt("Digite um número:"));

if (isNaN(n)) {
    console.log("Insira um número válido.");
} else {
    round=Math.round(n);

    if (n==round) {
        console.log("O número é inteiro");
    } else {
        console.log("O número é decimal");
    }
}
