import {Product} from '../interface/IProducts';
import {data} from './data';

// get all getProducts
export async function getProducts(): Promise<Product[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data.products);
    }, 4000);
  });
}

//get a sing product
export async function getProductById(id: string): Promise<Product | undefined> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data.products.find(x => x.id == id));
    }, 2000);
  });
}
