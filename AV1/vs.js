const readline = require("readline-sync");

let idade = readline.question("Digite sua idade: ");

if (idade >= 65){
    console.log("O usuario pode se aposentar.");
}
else{
    if(idade < 60){
        console.log("O usuario não pode se aposentar.");
    }
    else{
        let tempo = readline.question("Digite seu tempo de contribuicao: ");
        if(idade >= 60 && tempo >= 30){
        console.log("O usuario pode se aposentar.");
        }
        else{
        console.log("O usuario não pode se aposentar.");
        }
    }
}