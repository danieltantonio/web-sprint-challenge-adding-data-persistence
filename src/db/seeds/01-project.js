
exports.seed = function(knex) {
  const projects = [
    {
      name: 'Sprint Challenge',
      description: 'Finish Sprint challenge by making a database and endpoint, using Express and SQLite3.'
    },
    {
      name: 'Sleep',
      description: 'It is what it sounds like.'
    }
  ]
  return knex('project').insert(projects);
};
