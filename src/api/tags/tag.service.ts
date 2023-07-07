import { ErrorWithStatus } from '~/error/error-with-status';
import { Tag } from './tag.model';
import { QueryNameLimitOffset } from '~/types/query';

export const tagService = {
  async read(id: number | string) {
    const tag = await Tag.query().findById(id);
    if (!tag) throw new ErrorWithStatus('Tag not found', 404);
    return {
      tags: [tag],
    };
  },

  async readAll({ name, limit = 10, offset = 0 }: QueryNameLimitOffset) {
    if (name) {
      const tags = await Tag.query().where('name', 'like', `%${name}%`).limit(limit).offset(offset);
      return { tags: tags };
    }

    const tags = await Tag.query().limit(limit).offset(offset);
    return { tags };
  },

  async create({ name }: { name: string }) {
    await Tag.query().insert({ name });
    return { message: 'Product created' };
  },

  async update(id: number | string, { name }: { name: string }) {
    await Tag.query().findById(id).patch({ name });
    return { message: 'Product updated' };
  },

  async remove(id: number | string) {
    await Tag.query().deleteById(id);
    return { message: 'Product deleted' };
  },
};
