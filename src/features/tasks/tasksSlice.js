import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  filter: 'all', // 'all' | 'completed' | 'pending'
};

let nextId = 1;

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: nextId++,
        name: action.payload,
        completed: false,
      });
    },
    editTask: (state, action) => {
      const { id, name } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) task.name = name;
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, editTask, toggleTask, deleteTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer; 