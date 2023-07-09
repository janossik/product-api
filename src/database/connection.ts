import Knex from 'knex';
import { Model, knexSnakeCaseMappers } from 'objection';
import knexConfig from '~/../knexfile';

const env = process.env.NODE_ENV || 'development';

export const knex = Knex({ ...knexConfig[env], ...knexSnakeCaseMappers() });
// Give the knex instance to objection.
Model.knex(knex);
