salar=parseFloat(prompt("Digite o salário atual: R$ "));

if(salar<=280){
    const porc1=0.20
    aumento=salar*porc1; 
    nv_salar=salar+aumento
    console.log("O salário atual é: R$", salar);
    console.log("O percentual de ajuste aplicado é:", porc1);
    console.log("O valor do aumento é: R$", aumento);
    console.log("O novo salário é: R$", nv_salar);

}else if(salar>280&&salar<700){
    const porc2=0.15
    aumento=salar*porc2; 
    nv_salar=salar+aumento
    console.log("O salário atual é: R$", salar);
    console.log("O percentual de ajuste aplicado é:", porc2);
    console.log("O valor do aumento é: R$", aumento);
    console.log("O novo salário é: R$", nv_salar);

}else if(salar>700&&salar<1500){
    const porc3=0.10
    aumento=salar*porc3; 
    nv_salar=salar+aumento
    console.log("O salário atual é: R$", salar);
    console.log("O percentual de ajuste aplicado é:", porc3);
    console.log("O valor do aumento é: R$", aumento);
    console.log("O novo salário é: R$", nv_salar);

}else if(salar>1500){
    const porc4=0.05
    aumento=salar*porc4; 
    nv_salar=salar+aumento
    console.log("O salário atual é: R$", salar);
    console.log("O percentual de ajuste aplicado é:", porc4);
    console.log("O valor do aumento é: R$", aumento);
    console.log("O novo salário é: R$", nv_salar);

}else{
    console.log("Valor inválido")
}



