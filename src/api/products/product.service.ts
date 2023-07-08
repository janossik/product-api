import { Product } from '~/api/products/product.model';
import { ProductCreated, ProductUpdated, QueryProduct } from '~/api/products/product';
import { QueryNameLimitOffset } from '~/types/query';

export const productService = {
  async read(id: string | number) {
    const product = await Product.query().findById(id).throwIfNotFound({
      message: 'Product not found',
    });
    return {
      products: [product],
    };
  },

  async readAllWithTagsAndCategories({ name, limit = 10, offset = 0 }: QueryNameLimitOffset) {
    if (name) {
      const products = await Product.query()
        .withGraphFetched('[tags,categories]')
        .where('name', 'like', `%${name}%`)
        .limit(Number(limit))
        .offset(Number(offset));
      return { products };
    }

    const products = await Product.query().withGraphFetched('[tags,categories]').limit(Number(limit)).offset(Number(offset));
    return {
      products,
    };
  },

  async readAll({ name, limit = 10, offset = 0, tag, withTags, withCategories }: QueryProduct) {
    if (tag) {
      const products = await Product.query()
        .withGraphFetched(`[tags ${withCategories ? ', categories' : ''}]`)
        .modifiers({
          tags(builder) {
            builder.where('name', 'like', `%${tag}%`);
          },
        })
        .limit(Number(limit))
        .offset(Number(offset));
      return { products };
    }

    if (name) {
      const products = await Product.query()
        .where('name', 'like', `%${name}%`)
        .withGraphFetched(`[${withTags ? 'tags' : ''}${withCategories ? ', categories' : ''}]`)
        .limit(Number(limit))
        .offset(Number(offset));
      return { products };
    }

    const products = await Product.query()
      .withGraphFetched(`[${withTags ? 'tags' : ''}${withCategories ? ', categories' : ''}]`)
      .limit(Number(limit))
      .offset(Number(offset));

    return {
      products,
    };
  },

  async create({ tag_id, category_id, ...productCreated }: ProductCreated) {
    const result: Record<string, string> = { message: 'Product created' };
    const product = await Product.query().insert(productCreated);

    if (tag_id && !(await product.$relatedQuery('tags').where('tag_id', tag_id).resultSize())) {
      await product.$relatedQuery('tags').relate(tag_id);
    } else {
      result.message += 'This tag exists.';
    }

    if (category_id && !(await product.$relatedQuery('categories').where('category_id', category_id).resultSize())) {
      await product.$relatedQuery('categories').relate(category_id);
    } else {
      result.message += 'This category exists.';
    }

    return result;
  },

  async update(id: string | number, { tag_id, category_id, ...productUpdated }: ProductUpdated) {
    const product = await Product.query().findById(id).throwIfNotFound({
      message: 'Product not found',
    });

    await product.$query().patch(productUpdated);

    if (tag_id) await product.$relatedQuery('tags').relate(tag_id);
    if (category_id) await product.$relatedQuery('categories').relate(category_id);

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
