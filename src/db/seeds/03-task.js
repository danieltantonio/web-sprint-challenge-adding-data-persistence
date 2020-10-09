
exports.seed = function(knex) {
  const tasks = [
    {
      description: 'Create database',
      project_id: 1
    },
    {
      description: 'Lay down',
      project_id: 2
    },
    {
      description: 'Close eyes',
      project_id: 2
    },
    {
      description: 'Create seeds',
      project_id: 1
    },
    {
      description: 'Breathe',
      project_id: 2
    },
    {
      description: 'Create server/endpoints',
      project_id: 1
    },
    {
      description: 'Create database CRUD operations',
      project_id: 1
    }
  ]
  return knex('task').insert(tasks);
};
