import { Model } from 'objection';
import { Product } from '../products/product.model';

export class Tag extends Model {
  static tableName = 'tags';

  static relationMappings = {
    products: {
      relation: Model.ManyToManyRelation,
      modelClass: Product,
      join: {
        from: 'tags.id',
        through: {
          from: 'productsTags.tagId',
          to: 'productsTags.productId',
        },
        to: 'products.id',
      },
    },
  };
}
