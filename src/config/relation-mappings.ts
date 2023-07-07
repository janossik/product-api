import { Category } from '~/api/categories/category.model';
import { Product } from '~/api/products/product.model';
import { Tag } from '~/api/tags/tag.model';

Product.relationMappings = Product.setupRelation(Tag, Category);
