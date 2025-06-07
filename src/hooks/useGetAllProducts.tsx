import {useEffect, useState} from 'react';
import {getProducts} from '../api/services';
import {Product} from '../interface/IProducts';

export const UseGetAllProducts = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<Product[]>([]);
  const getAllProducts = async () => {
    setLoading(true);
    const response = await getProducts();
    setLoading(false);
    setData(response);
    return response;
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return {isLoading, getAllProducts, data};
};
