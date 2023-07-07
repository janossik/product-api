import { Category } from '~/api/category/category.model';
import { Product } from '~/api/products/product.model';
import { Tag } from '~/api/tags/tag.model';

Product.relationMappings = Product.setupRelation(Tag, Category);
