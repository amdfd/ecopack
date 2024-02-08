// ATIVAR LINKS DO MENU DE ACORDO COM A PÁGINA ATUAL
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if( url.includes(href) ) {
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

// INSERIR MENSAGEM DE CONTATO DE ACORDO COM O BOTÃO CLICADO
const parametros = new URLSearchParams(location.search);

function inserirMensagem(parametro) {
    const mensagemTextArea = document.getElementById('mensagem');

    const mensagemMap = {
        'couro-ecologico': 'Olá! Gostaria de mais informações sobre o couro ecológico',
        'reciclagem': 'Olá! Gostaria de saber mais sobre o programa de reciclagem',
        'citypack': 'Olá! Gostaria comprar uma mochila city/pack',
        'compack': 'Olá! Gostaria comprar uma mochila com/pack',
        'gopack': 'Olá! Gostaria comprar uma mochila go/pack'
    };

    mensagemTextArea.value = mensagemMap[parametro] || '';
}

parametros.forEach(inserirMensagem)

// PERGUNTAS FREQUENTES
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    pergunta.setAttribute('aria-expanded', resposta.classList.contains('ativa') ? 'false' : 'true');
    resposta.classList.toggle("ativa");
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta) 
}

perguntas.forEach(eventosPerguntas);

// GALERIA DE IMAGENS - MOCHILAS
const galeria = document.querySelectorAll('.mochila-imagens img');
const galeriaContainer = document.querySelector('.mochila-imagens');

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 1000px)').matches;
    if(media) {
        galeriaContainer.prepend(img);
    }
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
};

galeria.forEach(eventosGaleria);

// ANIMAÇÃO
if (window.SimpleAnime) {
    new SimpleAnime();
}
