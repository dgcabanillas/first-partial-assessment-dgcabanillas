import React, { useEffect } from 'react'
import Header from '../../components/Header';
import ProductItem from '../../components/ProductItem.jsx';
import useGetProducts from '../../hooks/useGetProducts';

const Home = () => {
  const { products } = useGetProducts();

  useEffect(() => {
    console.log( products );
  }, [products])

  return (
    <>
      <Header title='HOME'/>
      <div className='container py-3'>
        {
          products.length === 0 
            ? <p className='text-center fs-5'>No hay productos disponibles</p>
            : (
              <div className='row justify-content-start'>
                { products.map( product => { return <ProductItem key={product.id} product={product}/> })}
              </div>
            )
        }
      </div>
    </>
  )
}

export default Home;
