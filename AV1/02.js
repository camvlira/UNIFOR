let nomeAluno = prompt("Insira seu nome completo: ");
let av1 = parseFloat(prompt("Nota AV1: "));
let av2 = parseFloat(prompt("Nota AV2: "));
let notaParcial = ((av1+av2)/2);
if (notaParcial>=4){
    let av3 = parseFloat(prompt("Nota AV3: "));
    let frequenciaInput = prompt("Qual a sua frequência? ");
    let frequencia = parseFloat(frequenciaInput.replace('%', ''))
    let notaFinal = ((notaParcial+av3)/2);
        if ((notaFinal>=5)&&(frequencia>=75)){
            console.log("Parabéns, "+nomeAluno+", você está aprovado(a)(e) na disciplina, com "+notaFinal+" na sua Nota Final")
             }else{
                console.log("Reprovado na Nota final")}
    }else{
                console.log("Reprovado na Nota Parcial")}