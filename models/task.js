const db = require('../config/firebase');

const Task = {
  async create(name, description) {
    const newTask = {
      name,
      description,
      progress: 'Not started',
    };
    const docRef = await db.collection('tasks').add(newTask);
    return { id: docRef.id, ...newTask };
  },

  async getAll() {
    const snapshot = await db.collection('tasks').get();
    const tasks = snapshot.docs.map((doc) => {
      const data = doc.data();
      return { id: doc.id, ...data };
    });
    return tasks;
  },

  async deleteById(id) {
    await db.collection('tasks').doc(id).delete();
  },

  async updateProgress(id, progress) {
    await db.collection('tasks').doc(id).update({ progress });
  },
};

module.exports = Task;
