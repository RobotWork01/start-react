import React, { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>カウンターアプリ</h1>
      <p>現在のカウント: {count}</p>
      <button onClick={() => setCount(count + 1)}>増加</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>
        減少
      </button>
    </div>
  );
}

export default CounterApp;
