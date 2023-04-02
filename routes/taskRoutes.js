const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const newTask = await Task.create(name, description);
  res.json(newTask);
});

router.get('/', async (req, res) => {
  const tasks = await Task.getAll();
  res.json(tasks);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await Task.deleteById(id);
  res.sendStatus(204);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const { progress } = req.body;
  await Task.updateProgress(id, progress);
  res.sendStatus(204);
});

module.exports = router;
