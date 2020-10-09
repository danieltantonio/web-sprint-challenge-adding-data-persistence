const express = require('express');
const server = express();
const db = require('./db/db-config');

server.use(express.json());

server.get('/', (req,res) => {
    db
    .getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.post('/', (req,res) => {
    db
    .addProject(req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.get('/:id/resources', (req,res) => {
    db
    .getProjectResources(req.params.id)
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.post('/:id/resources', (req,res) => {
    db
    .addResource(req.params.id, req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.get('/:id/tasks', (req,res) => {
    db
    .getProjectTasks(req.params.id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.post('/:id/tasks', (req,res) => {
    db
    .addTask(req.params.id, req.body)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = server;