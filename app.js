let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


console.log(numeroSecreto);

exibirMensagemInicial();

function exibitTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.5});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavra = tentativas > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto) {
        exibitTextoNaTela('h1', 'Acertou!');
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavra}!`;
        exibitTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibitTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibitTextoNaTela('p', 'O número secreto é maior');
        }
    tentativas++;
    limparCampo();
    }
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let qtdeElementosNaLista = listaDeNumerosSorteados.length;

    if (qtdeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}     

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}

function exibirMensagemInicial() {
    exibitTextoNaTela('h1', 'Jogo do Número Secreto'); //Chamando função
    exibitTextoNaTela('p', 'Escolha um número entre 1 e 10');
}