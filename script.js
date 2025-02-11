document.addEventListener("DOMContentLoaded", function () {
    // Lista de áudios com nome e caminho do arquivo
    const audios = [
        { nome: "CPF cancelado", src: "audios/CPF CANCELADO.mp3" },
        { nome: "E o PIX ?", src: "audios/E O PIX.mp3" },
        { nome: "Galvão Bueno ninguém sabe", src: "audios/GALVAO NINGUEM SABE.MP3" },
        { nome: "Que isso moreno", src: "audios/QUE ISSO MORENO.mp3" },
        { nome: "Tu xera", src: "audios/TU XERA.mp3"}
    ];

    // Seleciona a seção onde os áudios serão inseridos
    const audioList = document.getElementById("audios-list");

    // Gera dinamicamente os elementos HTML para os áudios
    audios.forEach(audio => {
        const audioItem = document.createElement("div");
        audioItem.classList.add("audio-item");

        // Criando título do áudio
        const titulo = document.createElement("h3");
        titulo.textContent = audio.nome;

        // Criando player de áudio
        const audioElement = document.createElement("audio");
        audioElement.setAttribute("controls", "");
        const sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", audio.src);
        sourceElement.setAttribute("type", "audio/mpeg");
        audioElement.appendChild(sourceElement);

        // Criando container de botões
        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("buttons");

        // Botão de Download estilizado
        const downloadButton = document.createElement("button");
        downloadButton.classList.add("download");
        downloadButton.textContent = "⬇ Baixar";
        downloadButton.onclick = () => baixar(audio.src);

        // Botão de Compartilhar no WhatsApp
        const shareButton = document.createElement("button");
        shareButton.classList.add("share");
        shareButton.textContent = "📤 WhatsApp";
        shareButton.onclick = () => compartilhar(audio.src);

        // Adicionando botões ao container
        buttonContainer.appendChild(downloadButton);
        buttonContainer.appendChild(shareButton);

        // Adicionando elementos ao item de áudio
        audioItem.appendChild(titulo);
        audioItem.appendChild(audioElement);
        audioItem.appendChild(buttonContainer);

        // Adicionando o item de áudio à lista
        audioList.appendChild(audioItem);
    });
});

// Função para compartilhar no WhatsApp
function compartilhar(audioSrc) {
    const url = encodeURIComponent(window.location.origin + "/" + audioSrc);
    const whatsappLink = `https://api.whatsapp.com/send?text=🔥 Ouça esse áudio engraçado! ${url}`;
    window.open(whatsappLink, "_blank");
}

// Função para baixar o áudio
function baixar(audioSrc) {
    const link = document.createElement("a");
    link.href = audioSrc;
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
