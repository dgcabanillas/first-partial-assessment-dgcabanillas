const getProduct = ( isProduct, setProduct ) => {
  fetch(`https://fakestoreapi.com/products/${isProduct}`)
    .then( res => { return res.json() })
    .then( data => { setProduct(data) })
}

export default getProduct;