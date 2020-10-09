
exports.up = function(knex) {
  return knex.schema.createTable('project', tbl => {
      tbl.increments();
      tbl.string('name')
      .notNullable()
      .unique();
      tbl.string('description');
      tbl.boolean('completed')
      .notNullable()
      .defaultTo(false);
  })
  .createTable('resource', tbl => {
      tbl.increments();
      tbl.string('name')
      .notNullable();
      tbl.string('description');
      tbl.integer('project_id')
      .notNullable()
      .references('id')
      .inTable('project');
  })
  .createTable('task', tbl => {
      tbl.increments();
      tbl.string('description')
      .notNullable();
      tbl.string('notes');
      tbl.boolean('completed')
      .notNullable()
      .defaultTo(false);
      tbl.integer('project_id')
      .notNullable()
      .references('id')
      .inTable('project');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('task')
  .dropTableIfExists('resource')
  .dropTableIfExists('project');
};
