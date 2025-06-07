export interface Product {
  id: string;
  name: string;
  type: string;
  price: number;
  image: any;
  description: string[];
  qty?: number;
}

export interface ProductData {
  products: Product[];
}
