import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import NavLinks from '../../crossed/NavLinks';
import useGetProduct from '../../hooks/useGetProduct';

const Product = () => {

  const { id } = useParams();
  const { product } = useGetProduct( id );

  useEffect(() => {
    console.log('====================================');
    console.log( 'product ->', product );
    console.log('====================================');
  }, [product])

  if( !product ) return null;

  return (
    <>
      <Header title='PRODUCT'/>
      <div className='container py-3'>
        <div className="row">
          <NavLinks />
        </div>
        <div className="row py-3">
          <div className="col col-12 col-sm-6 col-md-5 col-lg-4">
            <div className="card p-4">
              <img src={product.image} className="card-img-top" alt={product.title} />
            </div>
          </div>
          <div className="col col-12 col-sm-6 col-md-7 col-lg-8">
            <h1 className='fs-3'>{ product.title }</h1>
            <p className='mb-0 fw-bold text-secondary' style={{ fontSize: 48 }}>{`$ ${product.price}`}</p>
            <h2 className='fs-5 text-secondary mb-3'>{ product.category }</h2>
            <p className='fs-6 text-secondary'>{ product.description }</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;
