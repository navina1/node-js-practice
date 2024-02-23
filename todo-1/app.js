const express=require("express");
const bodyParser=require("body-parser");

const app = express();
const port=3000;
let tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true }
  ];
  app.use(bodyParser.json());
  app.get('/tasks', (req, res) => {
    res.json(tasks);
  });
  
  // Get a task by ID
  app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  });
  app.post('/tasks', (req, res) => {
    const { title, completed } = req.body;
    const taskId = tasks.length + 1;
    const newTask = { id: taskId, title, completed };
    tasks.push(newTask);
    res.status(201).json(newTask);
  });
  
  // Update a task
  app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex === -1) {
      return res.status(404).json({ message: 'Task not found' });
    }
    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    res.json(tasks[taskIndex]);
  });
  
  // Delete a task
  app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'Task deleted successfully' });
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });