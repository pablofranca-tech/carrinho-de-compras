function adicionar() {
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split(" - ")[0];
  let valorUnitario = parseFloat(produto.split("R$")[1].replace(",", "."));
  let quantidade = parseInt(document.getElementById('quantidade').value);

  if (isNaN(quantidade) || quantidade <= 0) {
    alert("Por favor, insira uma quantidade válida.");
    return;
  }

  let preco = quantidade * valorUnitario;

  // Criar elemento visual do produto
  let listaProdutos = document.getElementById('lista-produtos');
  let novoProduto = document.createElement('section');
  novoProduto.classList.add('carrinho__produtos__produto');
  novoProduto.innerHTML = `<span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco.toFixed(2)}</span>`;
  listaProdutos.appendChild(novoProduto); // ✅ só essa linha é suficiente

  // Atualizar o valor total
  let valorTotal = document.getElementById('valor-total');
  let totalAtual = parseFloat(valorTotal.innerText.replace("R$", "").replace(",", ".")) || 0;
  let novoTotal = totalAtual + preco;
  valorTotal.innerText = `R$${novoTotal.toFixed(2)}`;
}


function limpar() {
  // Limpa os produtos do carrinho
  const listaProdutos = document.getElementById('lista-produtos');
  listaProdutos.innerHTML = '';

  // Reseta o valor total
  const valorTotal = document.getElementById('valor-total');
  valorTotal.innerText = 'R$0.00';

  // Opcional: limpa o campo de quantidade
  document.getElementById('quantidade').value = '';
}
