import React, { useState } from 'react';
import './App.css';

const NumberComponent = ({ number }) => {
  return <div className="number-component">Componente número: {number}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [components, setComponents] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
    setComponents([...components, count + 1]);
  };

  return (
    <div className="app">
      <button className="increment-button" onClick={handleIncrement}>
        Incrementar
      </button>
      <div className="components-container">
        {components.map((num, index) => (
          <NumberComponent key={index} number={num} />
        ))}
      </div>
    </div>
  );
};

export default App;
