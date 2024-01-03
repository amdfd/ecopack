// ativar links do menu de acordo com a página atual
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if( url.includes(href) ) {
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

// inserir mensagem de contato de acordo com botão clicado
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