tipoCarne = prompt("Digite o tipo de carne (filé duplo, alcatra, picanha): ").toLowerCase();
if (!["filé duplo","alcatra","picanha"].includes(tipoCarne)) {
    alert("Tipo de carne inválido!");
}else{

quantidade = parseFloat(prompt("Digite a quantidade de carne (kg): "));
if (quantidade <= 0 || isNaN(quantidade)) {
    alert("Quantidade inválida!");
}else{

if(tipoCarne=="filé duplo"){
    if(quantidade<=5){
        precoKg=5.80
        total=quantidade*precoKg
    }else{
        precoKg=4.9
        total=quantidade*precoKg
    }
}else if(tipoCarne=="alcatra"){
    if(quantidade<=5){
        precoKg=6.80
        total=quantidade*precoKg
    }else{
        precoKg=5.9
        total=quantidade*precoKg
    }
}else{
    if(quantidade<=5){
        precoKg=7.80
        total=quantidade*precoKg
    }else{
        precoKg=6.9
        total=quantidade*precoKg
    }
}


tipoPagamento = prompt("Digite o tipo de pagamento (cartão/à vista): ").toLowerCase();
if (!["cartão","à vista"].includes(tipoPagamento)) {
    alert("Tipo de pagamento inválido! Digite 'cartão' ou 'à vista'.");
}

if (tipoPagamento==='cartão') {
    desconto=total * 0.05;
    total_desc=total-desconto;

console.log("\n--- Cupom Fiscal ---");
console.log("Tipo de Carne:", tipoCarne);
console.log("Quantidade:", quantidade,"kg");
console.log("Preço por kg: R$",precoKg.toFixed(2));
console.log("Preço Total: R$", total.toFixed(2));
console.log("Desconto (5% no Cartão Tabajara): R$" ,desconto.toFixed(2));
console.log("Valor a Pagar: R$",total_desc.toFixed(2));
console.log("---------------------")
}else{
console.log("\n--- Cupom Fiscal ---");
console.log("Tipo de Carne:", tipoCarne);
console.log("Quantidade:", quantidade,"kg");
console.log("Preço por kg: R$",precoKg.toFixed(2));
console.log("Preço Total: R$", total.toFixed(2));
console.log("---------------------")
}
}
}
