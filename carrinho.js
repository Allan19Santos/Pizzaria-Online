function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const lista = document.getElementById('lista-carrinho');
    const totalElemento = document.getElementById('total');
    lista.innerHTML = '';
    let total = 0;
    carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <img src="${item.imagem}" alt="${item.nome}" style="width:100px; height:80px; object-fit:cover; margin-right:20px;">
    <span class="nome-produto">${item.nome}</span>
    <span class="preco-produto">R$ ${item.preco.toFixed(2)}</span>
    <button class="btn-remover" onclick="removerItem(${index})">Remover</button>
    `;
    lista.appendChild(li);
    total += item.preco;
    });
    totalElemento.textContent = total.toFixed(2);
    }
    function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
    }
    
    window.onload = carregarCarrinho;
    
    function ConfirmarCompra() {
    window.location.href = 'finalizar.html';
    }
    function PaginaInicial() {
    window.location.href = 'index.html';
    }