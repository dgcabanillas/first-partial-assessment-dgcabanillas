import { useEffect, useState } from 'react';
import getProduct from '../utils/api/getProduct';

const useGetProduct = ( id ) => {
  const [product, setProduct] = useState(null);
  
  useEffect(() => {
    if( id ) {
      getProduct( id, setProduct );
    }
  }, [id])

  return { product };
}

export default useGetProduct;