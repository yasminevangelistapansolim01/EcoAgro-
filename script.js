let tamanhoFonte = 18;

function aumentarFonte(){
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte(){
    if(tamanhoFonte > 12){
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

function alternarContraste(){
    document.body.classList.toggle("alto-contraste");
}

function corrigirQuiz(){
    let pontos = 0;

    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let q3 = document.querySelector('input[name="q3"]:checked');

    if(!q1 || !q2 || !q3){
        document.getElementById("resultado").innerHTML =
        "⚠️ Responda todas as perguntas antes de finalizar!";
        return;
    }

    pontos += Number(q1.value);
    pontos += Number(q2.value);
    pontos += Number(q3.value);

    let mensagem = "";

    if(pontos === 3){
        mensagem = "🌟 Parabéns! Você acertou tudo e demonstra grande consciência ambiental!";
    }else if(pontos === 2){
        mensagem = "👍 Muito bom! Você conhece práticas sustentáveis, mas ainda pode aprender mais.";
    }else{
        mensagem = "📚 Continue estudando! O uso consciente da água é essencial para o futuro.";
    }

    document.getElementById("resultado").innerHTML =
    `Você fez <strong>${pontos}/3 pontos</strong>.<br>${mensagem}`;
}

// Rolagem suave do menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(event){
        event.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});