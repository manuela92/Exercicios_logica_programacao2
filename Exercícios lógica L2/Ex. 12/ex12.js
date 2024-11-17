salar_b=parseFloat(prompt("Digite o valor do salário bruto:R$ "));

//Os valores que estavam no exercícios não me pareceram corretos, então utilizei os que encontrei na internet.

if(salar_b>0){
if(salar_b<=2259.20){
    aliq=0;
    console.log("Isento de IR")
}else if(salar_b>=2259.21&&salar_b<=2826.65){
    aliq=salar_b*0.075;
    console.log("Alíquota de 7.5%, que equivale à: R$",aliq);

}else if(salar_b>=2826.66&&salar_b<=3751.05){
    aliq=salar_b*0.15;
    console.log("Alíquota de 15%, que equivale à: R$",aliq);

}else if(salar_b>=3751.06&&salar_b<=4664.68){
    aliq=salar_b*0.224;
    console.log("Alíquota de 22.4%, que equivale à: R$",aliq);

}else if(salar_b>=4664.69){
    aliq=salar_b*0.275;
    console.log("Alíquota de 27.5%, que equivale à: R$",aliq);
}
sind_desc=salar_b*0.03
sind=salar_b-sind_desc;
console.log("Desconto do Sindicato de 3%, que equivale à: R$",sind_desc)

fgts=salar_b*0.08;
console.log("O valor do FGTS é: R$",fgts)

salar_liq=sind-aliq;
console.log("O salário líquido é: R$", salar_liq)

}else{
    console.log("Valor inválido")
}

