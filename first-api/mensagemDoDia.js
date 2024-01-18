let dados = require('./dados');

const retornarMensagemDoDia = (dia) => {
    return dados.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia;