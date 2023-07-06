import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema
    .createTable('tags', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
      table.timestamps(false, true);
    })
    .createTable('category', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable().unique();
      table.timestamps(false, true);
    })
    .createTable('products', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('author').notNullable();
      table.string('code').notNullable().unique();
      table.text('description');
      table.timestamps(false, true);
    })
    .createTable('products_tags', (table) => {
      table.increments('id').primary();
      table.timestamps(false, true);

      table.integer('product_id').unsigned().notNullable();
      table.foreign('product_id').references('id').inTable('products');

      table.integer('tag_id').unsigned().notNullable();
      table.foreign('tag_id').references('id').inTable('tags').onDelete('CASCADE');
    })
    .createTable('products_category', (table) => {
      table.increments('id').primary();
      table.timestamps(false, true);

      table.integer('product_id').unsigned().notNullable();
      table.foreign('product_id').references('id').inTable('products');

      table.integer('category_id').unsigned().notNullable();
      table.foreign('category_id').references('id').inTable('category').onDelete('CASCADE');
    });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema
    .dropTableIfExists('products_category')
    .dropTableIfExists('products_tags')
    .dropTableIfExists('products')
    .dropTableIfExists('category')
    .dropTableIfExists('tags');
}
