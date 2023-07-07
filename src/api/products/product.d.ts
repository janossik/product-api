export interface Product {
  id: number;
  name: string;
  author: string;
  description: string;
}

export type ProductCreated = Omit<Product, 'id'>;

export type ProductUpdated = Partial<ProductCreated>;
