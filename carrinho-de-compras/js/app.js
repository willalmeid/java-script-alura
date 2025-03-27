let totalGeral = 0;
limpar();

function adicionar() {
    let quantidade  = document.getElementById('quantidade').value;
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let preco = quantidade * valorUnitario;
    
    if (quantidade <= 0) {
        alert('A quantidade não pode ser menor ou igual a 0.');
    } else {
        // INCREMENTAR TOTAL NOVO AO TOTAL ANTERIOR
        totalGeral = totalGeral + preco;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${totalGeral}`;
    
        // INCREMENTAR ITEM NOVO NA LISTA
        let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = `${carrinho.innerHTML} <section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnitario}</span></section>`;
    
        // LIMPAR O CAMPO QUANTIDADE
        document.getElementById('quantidade').value = 0;
    }
    
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';  
}