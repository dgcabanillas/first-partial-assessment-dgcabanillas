const getProducts = ( setProducts ) => {
  fetch('https://fakestoreapi.com/products')
    .then( res => { return res.json() })
    .then( data => { setProducts(data) })
}

export default getProducts;