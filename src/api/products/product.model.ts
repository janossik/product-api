import { Model, RelationMapping, ModelClassSpecifier } from 'objection';

export class Product extends Model {
  static tableName = 'products';

  static relationMappings = {};
  static setupRelation(tag: ModelClassSpecifier, category: ModelClassSpecifier) {
    const relationMappings: Record<string, RelationMapping<Model>> = {};
    if (tag) {
      relationMappings.tags = {
        relation: Model.ManyToManyRelation,
        modelClass: tag,
        join: {
          from: 'products.id',
          through: {
            from: 'productsTags.productId',
            to: 'productsTags.tagId',
          },
          to: 'tags.id',
        },
      };
    }
    if (category) {
      relationMappings.category = {
        relation: Model.ManyToManyRelation,
        modelClass: category,
        join: {
          from: 'products.id',
          through: {
            from: 'productsCategory.productId',
            to: 'productsCategory.categoryId',
          },
          to: 'category.id',
        },
      };
    }
    return relationMappings;
  }
}
