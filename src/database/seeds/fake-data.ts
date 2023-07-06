import { Knex } from 'knex';

export async function seed(knex: Knex) {
  await knex('products_category').del();
  await knex('products_tags').del();
  await knex('products').del();
  await knex('category').del();
  await knex('tags').del();

  await knex('tags').insert([
    { id: 1, name: 'PJ-PME' },
    { id: 2, name: 'PJ-PEA' },
    { id: 3, name: 'PJ-PUE' },
    { id: 4, name: 'PJ-POS' },
  ]);

  await knex('category').insert([
    { id: 1, name: 'special' },
    { id: 2, name: 'rail' },
  ]);

  //Wszystkie dane są nieprawdziwe
  await knex('products').insert([
    {
      id: 1,
      name: 'Raspberry Pi 4B',
      code: '2018AJ10491',
      author: 'm.czaniecki@arex.pl',
      description: 'Komputer jednopłytkowy przeznaczony dla kolei, który jest przeznaczony do rozwoju webinek2',
    },
    {
      id: 2,
      name: 'Raspberry Pi 4B',
      code: '2018BJ11414',
      author: 'm.czaniecki@arex.pl',
      description: 'Komputer jednopłytkowy przeznaczony dla kolei, który jest przeznaczony dla stacji Gdynia Chylonia',
    },
    {
      id: 3,
      name: 'MTU MT 881 Ka 500 turbodiesel V8',
      code: '2023BJ1TTT0',
      author: 'm.czaniecki@arex.pl',
      description: 'Silnik przeznaczony dla AHS Krab',
    },
  ]);

  await knex('products_tags').insert([
    { id: 1, tag_id: 2, product_id: 1 },
    { id: 2, tag_id: 2, product_id: 2 },
    { id: 3, tag_id: 1, product_id: 3 },
  ]);

  await knex('products_category').insert([
    { id: 1, category_id: 2, product_id: 1 },
    { id: 2, category_id: 2, product_id: 2 },
  ]);
}
