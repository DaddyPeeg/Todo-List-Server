const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasksRoutes');

// Middleware
app.use(express.json());

// Routes
app.use('/tasks', tasksRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
