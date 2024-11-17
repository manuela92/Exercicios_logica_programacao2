//ax2 + bx + c
a=parseFloat(prompt("Digite o valor de a:"))
if(a==0){
    console.log("A equação não de segundo grau.");
}else{
    b=parseFloat(prompt("Digite o valor de b:"));
    c=parseFloat(prompt("Digite o valor de c:"));
    //delta=b2−4ac
    delta=(b*b)-(4*(a*b));

    if(delta<0){
        console.log("Delta negativo, a equação não possui raízes reais")
    }else if(delta==0){
        //x=-b+-raiz de delta/2*a
        raiz=-b/(2*a)
        console.log("Delta = 0, logo, a equação possui apenas uma raiz real, que é:", raiz);
    }else{
        raiz1=(-b+Math.sqrt(delta))/(2*a)
        raiz2=(-b-Math.sqrt(delta))/(2*a)
        console.log("Delta positivo, a equação possui duas raizes reais, são elas:",raiz1,raiz2);
    }
    }

