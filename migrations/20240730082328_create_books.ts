import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('books', (table) => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.integer('authorId').unsigned().references('id').inTable('authors').onDelete('CASCADE');
    table.date('publishedDate').notNullable();
    table.integer('pages').notNullable();
    table.string('language').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('books');
}
