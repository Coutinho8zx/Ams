participantes = [
    {nome: "Maria", pontos: 0},
    {nome: "João", pontos: 0},
    {nome: "Ana", pontos: 0}
];

function atualizarTabela() {
    participantes.sort((a,b) => b.pontos - a.pontos);

    const tbody = document.querySelector("#ranking tbody");
    tbody.innerHTML = "";

    participantes.forEach((p, indice) => {
        const linha = document.createElement("tr");

        if(indice === 0){
            linha.classList.add("campeao");
        }

        linha.innerHTML = `
            <td>${p.nome}</td>
            <td>${p.pontos}</td>
            <td>
                <button onclick="adicionarPontos('${p.nome}', 2)">
                    +2 Pilha
                </button>

                <button onclick="adicionarPontos('${p.nome}', 5)">
                    +5 Bateria
                </button>

                <button onclick="adicionarPontos('${p.nome}', 10)">
                    +10 Eletrônico
                </button>
            </td>
        `;

        tbody.appendChild(linha);
    });
}

function adicionarPontos(nome, valor){
    let participante = participantes.find(p => p.nome === nome);
    participante.pontos += valor;
    atualizarTabela();
}

atualizarTabela();