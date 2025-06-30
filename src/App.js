import React from 'react';
import './App.css';
import TaskFilters from './features/tasks/TaskFilters';
import TaskList from './features/tasks/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Tarefas 🗿🍷</h1>
        <TaskFilters />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
