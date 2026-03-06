let nomeMotorista = prompt("Qual o nome do motorista?\n");
let velocidadeMax = Number(prompt("Qual era a velocidade máxima?\n"));
let velocidadeVeiculo = Number(prompt("A quantos km/h o veículo se encontrava?\n"));

let excessoRegistrado = velocidadeVeiculo - velocidadeMax;

if (excessoRegistrado <= 0) {
    console.log("Motorista dentro do limite de velocidade");
} else {
    if (excessoRegistrado <= 10) {
        console.log(`--- DETALHES DA INFRAÇÃO ---
        \nNome do motorista: ${nomeMotorista}
        \nLimite da via: ${velocidadeMax}km/h
        \nVelocidade registrada: ${velocidadeVeiculo}km/h
        \nExcesso: ${excessoRegistrado}km/h
        \nTipo de multa: Multa leve
        \nValor da penalidade: R$50`);
    
    } else if (excessoRegistrado <= 20) {
        console.log(`--- DETALHES DA INFRAÇÃO ---
        \nNome do motorista: ${nomeMotorista}
        \nLimite da via: ${velocidadeMax}km/h
        \nVelocidade registrada: ${velocidadeVeiculo}km/h
        \nExcesso: ${excessoRegistrado}km/h
        \nTipo de multa: Multa média
        \nValor da penalidade: R$ 100`);
    } else {
        console.log(`--- DETALHES DA INFRAÇÃO ---
        \nNome do motorista: ${nomeMotorista}
        \nLimite da via: ${velocidadeMax}km/h
        \nVelocidade registrada: ${velocidadeVeiculo}km/h
        \nExcesso: ${excessoRegistrado}km/h
        \nTipo de multa: Multa grave
        \nValor da penalidade: R$200`);
    }
}