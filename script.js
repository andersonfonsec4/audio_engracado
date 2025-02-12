// Lista de áudios (pode ser substituída por uma chamada a uma API ou banco de dados)
const audios = [
    {
        title: "Ai cachorro",
        file: "audios/AI CACHORRO.mp3"
    },
    {
        title: "CPF cancelado",
        file: "audios/CPF CANCELADO.mp3"
    },
    {
        title: "E o PIX ?",
        file: "audios/E O PIX.mp3"
    },
    {
        title: "Ninguém sabe",
        file: "audios/GALVAO NINGUEM SABE.mp3"
    },
    {
        title: "Que isso moreno",
        file: "audios/QUE ISSO MORENO.mp3"
    },
    {
        title: "Tu xera",
        file: "audios/TU XERA.mp3"
    },
    {
        title: "Vai entrar o grosso",
        file: "audios/VAI ENTRAR O GROSSO.mp3"
    }

];

// Função para criar um card de áudio
function createAudioCard(audio) {
    const article = document.createElement("article");
    article.classList.add("audio-card");
    article.setAttribute("aria-label", `Áudio: ${audio.title}`);

    const title = document.createElement("h3");
    title.classList.add("audio-title");
    title.textContent = audio.title;

    const audioElement = document.createElement("audio");
    audioElement.controls = true;
    const source = document.createElement("source");
    source.src = audio.file;
    source.type = "audio/mpeg";
    audioElement.appendChild(source);
    audioElement.innerHTML += "Seu navegador não suporta o elemento de áudio.";

    const downloadLink = document.createElement("a");
    downloadLink.href = audio.file;
    downloadLink.download = audio.file;
    downloadLink.classList.add("download-button");
    downloadLink.textContent = "Baixar Áudio";

    article.appendChild(title);
    article.appendChild(audioElement);
    article.appendChild(downloadLink);

    return article;
}

// Função para carregar os áudios na página
function loadAudios() {
    const audioContainer = document.getElementById("audio-container");

    if (audioContainer) {
        audios.forEach(audio => {
            const audioCard = createAudioCard(audio);
            audioContainer.appendChild(audioCard);
        });
    } else {
        console.error("Container de áudios não encontrado!");
    }
}

// Atualiza o ano dinamicamente no rodapé
function updateYear() {
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Carrega os áudios e atualiza o ano quando a página for carregada
window.onload = function () {
    loadAudios();
    updateYear();
};