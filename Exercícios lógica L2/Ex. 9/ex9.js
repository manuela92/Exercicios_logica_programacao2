n1=parseFloat(prompt("Digite um número:"));
n2=parseFloat(prompt("Digite mais um número:"));
n3=parseFloat(prompt("Digite outro número:"));

ordem=[n1,n2,n3].sort((a, b)=> a-b)
console.log(ordem)