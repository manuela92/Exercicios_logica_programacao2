    perguntas = [
        "Telefonou para a vítima?",
        "Esteve no local do crime?",
        "Mora perto da vítima?",
        "Devia para a vítima?",
        "Já trabalhou com a vítima?"
    ];

     respostasPositivas = 0;
   
    for ( pergunta of perguntas) {
         resposta = prompt(pergunta + " (sim/não)").toLowerCase();
        if (resposta === "sim") respostasPositivas++;
    }
    
    console.log("Classificação:");
    if (respostasPositivas === 2) {
        console.log("Suspeita");
    } else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
        console.log("Cúmplice");
    } else if (respostasPositivas === 5) {
        console.log("Assassino");
    } else {
        console.log("Inocente");
    }
