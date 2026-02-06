function gerarGuerreiro() {

    let nome = document.getElementById("nome").value;
    let classe = document.getElementById("classe").value;
    let arma = document.getElementById("arma").value;

    let resultado = document.getElementById("resultado");

    if (nome === "" || classe === "" || arma === "") {
        resultado.innerHTML = "⚠️ Preencha todos os campos!";
        return;
    }

    // Variáveis do poder
    let poder = "";
    let descricao = "";

   // ===== PODERES POR CLASSE =====
    if (classe === "Mago") {
    poder = "de lançar Bolas de Fogo";
    descricao = " Ele consegue lançar feitiços devastadores usando mana.";
} 
else if (classe === "Viking") {
    poder = " da Fúria Nórdica";
    descricao = "Aumentando o ataque quando entra em batalha.";
} 
else if (classe === "Anjo") {
    poder = "de Cura Divina";
    descricao = "Ajuda a recuperar a vida dos aliados.";
} 
else if (classe === "Demônio") {
    poder = "das chamas do Inferno";
    descricao = "Que causa dano contínuo aos inimigos.";
} 
else if (classe === "Ninja") {
    poder = "De Ataque das Sombras";
    descricao = "Com golpe rápido com chance de ataque crítico.";
} 
else if (classe === "Selvagem") {
    poder = "de Controle de Animais";
    descricao = "ele Controla os animais, que ajudam na batalha.";
} 
else if (classe === "Anão") {
    poder = "de Mudança de Tamanho";
    descricao = "ele Consegue manipular seu tamanho até níveis moleculares.";
} 
else if (classe === "Sayajin") {
    poder = "do Kamehameha";
    descricao = "com Rajada de energia destruidora conhecida como Kamehameha.";
} 
else if (classe === "Divindade") {
    poder = " de Todos os Poderes";
    descricao = "Possuindo todos os poderes existentes no universo.";
} 
else {
    poder = "💥 Poder Desconhecido";
    descricao = "Um poder misterioso ainda não revelado.";
}

// ===== MOSTRA NA TELA =====
resultado.innerHTML = `
    <h2>⚔️ Guerreiro Criado ⚔️</h2>
    <p>Seu guerreiro é o: ${nome} da classe ${classe} com a arma ${arma} e seu guerreiro tem o poder ${poder} ${descricao}</p>
`;
}
