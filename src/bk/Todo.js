import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ToDoリスト</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="タスクを入力"
      />
      <button onClick={addTask}>追加</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
