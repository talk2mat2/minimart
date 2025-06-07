import {useEffect, useState} from 'react';
import {getProductById, getProducts} from '../api/services';
import {Product} from '../interface/IProducts';

export const UseGetProduct = (id: string) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Product | undefined>(undefined);
  const getProduct = async () => {
    setLoading(true);
    const response = await getProductById(id);
    setData(response);
    setLoading(false);
    return response;
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return {isLoading, getProduct, data};
};
