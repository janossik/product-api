import { Model } from 'objection';
import { Product } from '../products/product.model';

export class Category extends Model {
  static tableName = 'categories';

  static relationMappings = {
    products: {
      relation: Model.ManyToManyRelation,
      modelClass: Product,
      join: {
        from: 'category.id',
        through: {
          from: 'productsCategories.categoryId',
          to: 'productsCategories.productId',
        },
        to: 'products.categoryId',
      },
    },
  };
}
