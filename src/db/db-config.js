const db = require('./connect');

module.exports = {
    getProjects,
    addProject,
    getProjectResources,
    addResource,
    getProjectTasks,
    addTask
}

function getProjects() {
    return db('project');
};

function getProjectResources(id) {
    return db('resource')
    .where('project_id', id)
};

function getProjectTasks(id) {
    return db
    .select('task.description as task_description', 'task.project_id', 'project.name as project_name', 'project.description as project_description')
    .from('task')
    .join('project', 'task.project_id', '=', 'project.id')
    .where('task.project_id', id);
};

function addProject(project) {
    return db('project')
    .insert(project)
};

function addResource(id, resource) {
    return db('resource')
    .insert({ ...resource, project_id: id });
};

function addTask(id, task) {
    return db('task')
    .insert({ ...task, project_id: id });
};