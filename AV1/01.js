let idade = prompt("Digite sua idade: ");

if (idade >= 65){
    console.log("O usuario pode se aposentar.");
}
else if (idade < 60){
    console.log("O usuario não pode se aposentar.");
}
else{
    let tempo = prompt("Digite seu tempo de contribuição: ");
    if(tempo >= 30){
        console.log("O usuario pode se aposentar.");
    }
    else{
        console.log("O usuario não pode se aposentar.");
}
}