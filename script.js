function verificarRespostas() {
    const respostasCorretas = {
        q1: "a",
        q2: "c",
        q3: "b"
    };

    let acertouTudo = true;

    Object.keys(respostasCorretas).forEach(pergunta => {
        const resposta = document.querySelector(`input[name="${pergunta}"]:checked`);
        if (!resposta || resposta.value !== respostasCorretas[pergunta]) {
            acertouTudo = false;
        }
    });

    if (acertouTudo) {
        document.getElementById("modal").style.display = "flex";
    } else {
        alert("Ops! Você não acertou todas. Tente novamente!");
    }
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}
