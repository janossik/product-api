import { Model } from 'objection';
import { Product } from '../products/product.model';

export class Category extends Model {
  static tableName = 'category';

  static relationMappings = {
    products: {
      relation: Model.ManyToManyRelation,
      modelClass: Product,
      join: {
        from: 'category.id',
        through: {
          from: 'productsCategory.categoryId',
          to: 'productsCategory.productId',
        },
        to: 'products.categoryId',
      },
    },
  };
}
