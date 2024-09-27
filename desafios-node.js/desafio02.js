// Solicita o ano de nascimento do cliente
const anoNascimento = parseInt(prompt("Digite seu ano de nascimento:"));

// Calcula a idade do cliente
const idade = anoAtual - anoNascimento;

// Solicita se a conta está ativa
const contaAtiva = prompt("Sua conta está ativa? (Sim/Não)").toLowerCase() === "sim";

// Solicita se o cliente tem restrição de crédito
const restricaoCredito = prompt("Você tem restrição de crédito? (Sim/Não)").toLowerCase() === "sim";

// Solicita se o sistema está em manutenção
const sistemaManutencao = prompt("O sistema está em manutenção? (Sim/Não)").toLowerCase() === "sim";

// Verifica as condições de acesso
if (idade >= 18 && contaAtiva && (!restricaoCredito || sistemaManutencao)) {
    console.log("Acesso concedido");
} else {
    console.log("Acesso negado");
}
