/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Numero Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';

esse codigo não é errado, mas utilisando uma função conseguimos melhorar e abreviar nosso codigo

*/
let numeroMaximo = 100
let listaDeNumeroSorteado = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1; 

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random () *numeroMaximo + 1);
   let ListaCompleta = listaDeNumeroSorteado.length

    if (ListaCompleta == numeroMaximo) {
        listaDeNumeroSorteado = [];
    }

   if(listaDeNumeroSorteado.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
   }else{
        listaDeNumeroSorteado.push(numeroEscolhido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolhido;
   } 
        
}

function exibirTexto(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function textoInicial(){
    exibirTexto('h1', 'Numero Secreto');
    exibirTexto('p', 'Escolha um numero entre 1 e 100');
}

textoInicial()

function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
   
        let palavraTentativas = tentativa > 1? 'tentaivas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o numero secreto com ${tentativa} ${palavraTentativas}`
        exibirTexto ('h1', 'Parabéns!!')
        exibirTexto ('p', mensagemTentativa);

    document.getElementById ('reiniciar').removeAttribute('disabled');
    
}    else {
        if (chute < numeroSecreto) {
            exibirTexto ('p', 'O numero secreto é maior')
    }   else{
            exibirTexto ('p', 'O numero secreto é menor')
    } 
    tentativa ++;
    limparCampo()
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    textoInicial();
    tentativa = 1;
    document.getElementById ('reiniciar').setAttribute('disabled', true);

}



