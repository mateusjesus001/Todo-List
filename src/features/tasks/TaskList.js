import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const [editingTask, setEditingTask] = useState(null);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div style={{ width: '100%', maxWidth: 500, margin: '0 auto' }}>
      <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredTasks.length === 0 ? (
          <li style={{ textAlign: 'center', color: '#888' }}>Nenhuma tarefa</li>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} onEdit={setEditingTask} />
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList; 