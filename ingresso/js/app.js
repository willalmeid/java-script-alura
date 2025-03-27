let tipo = document.getElementById('tipo-ingresso');
let tagQTD = document.getElementById('qtd');
limpar();

function comprar() {
    let quantidade = document.getElementById('qtd').value;
    
    if (tipo.value != '' && quantidade != '' && quantidade > 0) {        
        let tagQTDDisponivelPista = document.getElementById('qtd-pista');
        let tagQTDDisponivelCadeiraSuperior = document.getElementById('qtd-superior');
        let tagQTDDisponivelCadeiraInferior = document.getElementById('qtd-inferior');
        
        let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

        if (tipo.value == 'pista') {
            tagQTDDisponivelPista.textContent = teste(qtdPista, quantidade, tipo);
        } else if (tipo.value == 'superior') {
            tagQTDDisponivelCadeiraSuperior.textContent = teste(qtdSuperior, quantidade, tipo);
        } else {
            tagQTDDisponivelCadeiraInferior.textContent = teste(qtdInferior, quantidade, tipo);
        }
    } else {
        alert('Alguns dos valores requeridos estão errados.');
        return
    }

    limpar();
}

function teste(quantidadeDisponivel, quantidade, tipo) {
    if (quantidadeDisponivel != 0 && quantidadeDisponivel >= quantidade) {
        let novaQuantidade = quantidadeDisponivel - quantidade;
        return novaQuantidade;
    } else {
        alert(`Quantidade indisponível para ${tipo.value}!`);
        return quantidadeDisponivel;
    }
}

function limpar() {
    tipo.value = '';
    tagQTD.value = '';
}