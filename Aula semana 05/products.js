const productListElement = document.querySelector('.products')

async function getAllProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10')

    const data = await response.json()

    return data.products

  } catch (error) {
    console.log(error)
    return []
  }
}

/**
 * Função responsavel por criar elemento de produtos
 */
function createElementProduct(product) {
  /**
   * div => .product-card
   *  --- strong => titulo
   *  --- span => valor
   *  --- button => adicionar ao carrinho
   */
  const productCardElemento = document.createElement('div')
  productCardElemento.classList.add('product-card')

  const tituloElemento = document.createElement('strong')
  tituloElemento.innerHTML = product.title

  const valorElemento = document.createElement('span')
  valorElemento.innerHTML = product.price

  const buttonElemento = document.createElement('button')
  buttonElemento.innerText = "Adicionar"

  productCardElemento.appendChild(tituloElemento)
  productCardElemento.appendChild(valorElemento)
  productCardElemento.appendChild(buttonElemento)

  return productCardElemento;
}


async function renderProducts() {
  const products = await getAllProducts()
  // console.log(products)
  productListElement.innerHTML = ""

  products.forEach(product => {
    const productItemElemento = createElementProduct(product)
    productListElement.appendChild(productItemElemento)
  })
}

renderProducts()