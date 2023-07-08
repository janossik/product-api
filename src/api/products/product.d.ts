import { QueryNameLimitOffset } from '~/types/query';

export interface Product {
  id: number;
  name: string;
  author: string;
  description: string;
  tag_id?: number;
  category_id?: number;
}

export type ProductCreated = Omit<Product, 'id'>;

export type ProductUpdated = Partial<ProductCreated>;

export interface QueryProduct extends QueryNameLimitOffset {
  tag?: string;
  category?: string;
  withTags?: boolean;
  withCategories?: boolean;
}
