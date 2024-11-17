

dia = parseInt(prompt("Digite uma data (dd)"));
mes = parseInt(prompt("Digite uma mês (mm)"));
ano = parseInt(prompt("Digite uma ano (aaaa)"));

if(ano>0){
    if(mes>=1&&mes<=12){
        if(mes==1||mes==3||mes==5||mes==7||mes==8||mes==10||mes==12){
            if(dia>=1&&dia<=31){
                console.log("Data válida")
            }else{
                console.log("Data inválida")
            }      
        }else if(mes==2){
            if(dia>=1&&dia<=28){
                console.log("Data válida")
            }else{
                console.log("Data inválida")
            }
        }else{
            if(dia>=1&&dia<=30){
                console.log("Data válida")
            }else{
                console.log("Data inválida") 
            }
        }   
    }else{
        console.log("Data inválida")
    }
}else{
    console.log("Data inválida")
}
