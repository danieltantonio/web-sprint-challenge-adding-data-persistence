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
    .select('')
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