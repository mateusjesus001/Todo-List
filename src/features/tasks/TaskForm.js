import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from './tasksSlice';

const TaskForm = ({ editingTask, setEditingTask }) => {
  const [input, setInput] = useState(editingTask ? editingTask.name : '');
  const dispatch = useDispatch();

  React.useEffect(() => {
    setInput(editingTask ? editingTask.name : '');
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    if (editingTask) {
      dispatch(editTask({ id: editingTask.id, name: input }));
      setEditingTask(null);
    } else {
      dispatch(addTask(input));
    }
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite a tarefa"
        style={{ padding: 8, width: '70%' }}
      />
      <button type="submit" style={{ padding: 8, marginLeft: 8 }}>
        {editingTask ? 'Salvar' : 'Adicionar'}
      </button>
      {editingTask && (
        <button type="button" onClick={() => setEditingTask(null)} style={{ marginLeft: 8 }}>
          Cancelar
        </button>
      )}
    </form>
  );
};

export default TaskForm; 