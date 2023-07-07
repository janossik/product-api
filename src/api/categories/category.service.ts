import { Category } from './category.model';
import { QueryNameLimitOffset } from '~/types/query';

export const categoryService = {
  async read(id: string | number) {
    const category = await Category.query().findById(id);
    return {
      category: [category],
    };
  },

  async readAll({ name, limit = 10, offset = 0 }: QueryNameLimitOffset) {
    if (name) {
      const category = await Category.query().where('name', 'like', `%${name}%`).limit(limit).offset(offset);
      return { category };
    }

    const category = await Category.query().limit(limit).offset(offset);
    return { category };
  },

  async create({ name }: { name: string }) {
    await Category.query().insert({ name });
    return { message: 'Product created' };
  },

  async update(id: string | number, { name }: { name: string }) {
    await Category.query().findById(id).patch({ name });
    return { message: 'Product updated' };
  },

  async remove(id: string | number) {
    await Category.query().deleteById(id);
    return { message: 'Product deleted' };
  },
};
