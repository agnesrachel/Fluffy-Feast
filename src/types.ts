export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'dog' | 'cat';
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}