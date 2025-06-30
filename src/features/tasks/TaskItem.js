import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from './tasksSlice';

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
        style={{ marginRight: 8 }}
      />
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          flex: 1,
        }}
      >
        {task.name}
      </span>
      <button onClick={() => onEdit(task)} style={{ marginLeft: 8 }}>
        Editar
      </button>
      <button onClick={() => dispatch(deleteTask(task.id))} style={{ marginLeft: 8 }}>
        Excluir
      </button>
    </li>
  );
};

export default TaskItem; 