import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './tasksSlice';

const filters = [
  { label: 'Todas', value: 'all' },
  { label: 'Concluídas', value: 'completed' },
  { label: 'Pendentes', value: 'pending' },
];

const TaskFilters = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  return (
    <div style={{ marginBottom: 16 }}>
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => dispatch(setFilter(f.value))}
          style={{
            padding: 8,
            marginRight: 8,
            background: filter === f.value ? '#1976d2' : '#eee',
            color: filter === f.value ? '#fff' : '#333',
            border: 'none',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters; 