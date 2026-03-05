let nomeMotorista = prompt("Qual o nome do motorista?\n");
let velocidadeMax = Number(prompt("Qual era a velocidade máxima?\n"));
let velocidadeVeiculo = Number(prompt("A quantos km/h o veículo se encontrava?\n"));

let excessoRegistrado = velocidadeVeiculo - velocidadeMax;

if (excessoRegistrado <= 0) {
    console.log("Motorista dentro do limite de velocidade");
} else {

    if (excessoRegistrado <= 10) {
        exibirMulta(nomeMotorista, velocidadeMax, velocidadeVeiculo, "Multa leve", 50);
    } else if (excessoRegistrado <= 20) {
        exibirMulta(nomeMotorista, velocidadeMax, velocidadeVeiculo, "Multa média", 100);
    } else {
        exibirMulta(nomeMotorista, velocidadeMax, velocidadeVeiculo, "Multa grave", 200);
    }
}

function exibirMulta(nome, limite, real, tipo, valor) {
    console.log(`--- DETALHES DA INFRAÇÃO ---
    \nNome do motorista: ${nome}
    \nLimite da via: ${limite}km/h
    \nVelocidade registrada: ${real}km/h
    \nExcesso: ${real - limite}km/h
    \nTipo de multa: ${tipo}
    \nValor da penalidade: R$${valor}`);
}