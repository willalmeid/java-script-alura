let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');     
    if (amigo.value == '' || amigos.includes(amigo.value)) {
        alert('Amigo inválido.');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
        atualizarLista();
        atualizarSorteio();
    }
}

function sortear() {
    if (amigos.length < 3) {
        alert('Digite ao menos 3 amigos para realizar o sorteio.');
    } else {
        document.getElementById('lista-sorteio').innerHTML = '';
        embaralha(amigos);  
        let sorteio = document.getElementById('lista-sorteio');
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                sorteio.innerHTML += amigos[i] + '  -->  ' + amigos[0];
            } else {
                sorteio.innerHTML += amigos[i] + '  -->  ' + amigos[i+1] + '<br>';
            }
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    console.log(amigos);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    if (amigos.length > 1) {
        let span1 = document.createElement('span');
        span1.textContent += amigos[0];
        span1.addEventListener('click', function() {
                excluirAmigo(0);
            });
        lista.appendChild(span1);
        for (let i = 1; i < amigos.length; i++) {
            let span = document.createElement('span');
            // Cria um elemento de parágrafo para cada amigo
            span.textContent += ', ' + amigos[i];
           
            // Adiciona um evento de clique para excluir o amigo
            span.addEventListener('click', function() {
                excluirAmigo(i);
            });
    
            // Adiciona o parágrafo à lista
            lista.appendChild(span);
        }
    } else {
        for (let i = 0; i < amigos.length; i++) {
            // Cria um elemento de parágrafo para cada amigo
            let span = document.createElement('span');
            span.textContent = amigos[i];
           
            // Adiciona um evento de clique para excluir o amigo
            span.addEventListener('click', function() {
                excluirAmigo(i);
            });
    
            // Adiciona o parágrafo à lista
            lista.appendChild(span);
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}