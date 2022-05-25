const router = require('express').Router();
const projects = require('../services/projects-service');

router.get('/projects', projects.all);

router.get('/projects/:id', projects.one);

router.post('/projects', projects.create);

router.put('/projects/:id', projects.update);

router.put('/projects/:id/confirm', projects.confirm);

router.delete('/projects/:id', projects.delete);

module.exports = router;