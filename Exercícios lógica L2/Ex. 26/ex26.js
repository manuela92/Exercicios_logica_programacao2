comb=prompt("Qual o tipo de combustível? Digite G-gasolina, A-álcool");
lt=parseFloat(prompt("Quantos litros?"));

if(lt>0&&lt<=20){
    if(comb=="G"){
        valor_in=5.5*lt
        desc= valor_in-((5.5*0.4)*lt);
        console.log("O valor a ser pago é R$",desc) 
    }else if(comb=="A"){
        valor_in=3.9*lt
        desc= valor_in-((3.9*0.3)*lt);
        console.log("O valor a ser pago é R$",desc) 
    }else{
        console.log("Selecione um tipo válido")
    }
}else if(lt>20){
    if(comb=="G"){
        valor_in=5.5*lt
        desc= valor_in-((5.5*0.6)*lt);
        console.log("O valor a ser pago é R$",desc) 
    }else if(comb=="A"){
        valor_in=3.9*lt
        desc= valor_in-((3.9*0.5)*lt);
        console.log("O valor a ser pago é R$",desc) 
    }else{
        console.log("Selecione um tipo válido")
    }
}else{
    console.log("Digite um valor válido")
}