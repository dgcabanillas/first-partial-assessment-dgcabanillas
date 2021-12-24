import { useEffect, useState } from 'react';
import getProducts from '../utils/api/getProducts';

const useGetProducts = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts( setProducts );
  }, [])

  return { products };
}

export default useGetProducts;