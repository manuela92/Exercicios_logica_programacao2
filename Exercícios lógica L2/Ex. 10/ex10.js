turno=String(prompt("Em qual turno você estuda? Digite 'M' para Matutino, 'V' para Vespertino ou 'N' para Noturno"));

if(turno=="M"){
    console.log("Bom dia!")
}else if(turno=="V"){
    console.log("Boa tarde!")
}else if(turno=="N"){
    console.log("Boa noite!")
}else{
    console.log("Valor inválido")
}