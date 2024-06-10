const produtos = [
    { nome: "Camiseta", valor: 29.99 },
    { nome: "Calça Jeans", valor: 49.99 },
    { nome: "Tênis", valor: 79.99 },
    { nome: "Boné", valor: 14.99 }
];

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    produtos.forEach(produto => {
        const listItem = document.createElement('li');
        
        const productName = document.createElement('span');
        productName.classList.add('product-name');
        productName.textContent = produto.nome;
        
        const productPrice = document.createElement('span');
        productPrice.classList.add('product-price');
        productPrice.textContent = `R$ ${produto.valor.toFixed(2)}`;
        
        listItem.appendChild(productName);
        listItem.appendChild(productPrice);
        
        productList.appendChild(listItem);
    });
});
