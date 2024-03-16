function toggleDarkMode() {
    var darkModeSwitch = document.getElementById("darkModeSwitch");

    if (darkModeSwitch.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

//função criada para alterar entre os temas propostos pelo desafio. 

function trocarFoto() {
    var imagem = document.getElementById("imagem");
    if (imagem.src.includes("avatarAang.webp")) {
        imagem.src = "src/img/avatarAzul.jpg";
    } else {
        imagem.src = "src/img/avatarAang.webp";
    }
}

//fiz com que o botão de ajustar a foto trocasse entre as duas imagens disponiveis no exemplo, podendo assim escolher dinamicamente entre as duas.

function criarDadosFicticios() {

    console.log("Dados fictícios criados");
}

//criado um exemplo simples de uma função recebendo a informação do click do mouse. 

function alternarModal() {

    var modal = document.getElementById("modal");
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

//função feita para abrir e fechar o modal referente as tecnologias utilizadas.