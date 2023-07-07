import { Product } from '~/api/products/product.model';
import { ProductCreated, ProductUpdated } from '~/api/products/product';
import { QueryNameLimitOffset } from '~/types/query';

export const productService = {
  async read(id: string | number) {
    const product = await Product.query().findById(id);
    return {
      products: [product],
    };
  },
  async readAll({ name, limit = 10, offset = 0 }: QueryNameLimitOffset) {
    if (name) {
      const products = await Product.query().where('name', 'like', `%${name}%`).limit(limit).offset(offset);
      return { products };
    }

    const products = await Product.query().limit(limit).offset(offset);
    return {
      products,
    };
  },
  async create(productCreated: ProductCreated) {
    await Product.query().insert(productCreated);
    return {
      message: 'Product created',
    };
  },
  async update(id: string | number, productUpdated: ProductUpdated) {
    await Product.query().findById(id).patch(productUpdated);
    return {
      message: 'Product updated',
    };
  },
  async remove(id: string | number) {
    await Product.query().deleteById(id);
    return {
      message: 'Product deleted',
    };
  },
};
