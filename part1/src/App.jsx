
import React, { useState } from 'react';

const NumberComponent = ({ number }) => {
  return <div>Componente número: {number}</div>;
};

const App = () => {
  const [count, setCount] = useState(0);
  const [components, setComponents] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
    setComponents([...components, count + 1]);
  };

  return (
    <div>
      <button onClick={handleIncrement}>Incrementar</button>
      {components.map((num, index) => (
        <NumberComponent key={index} number={num} />
      ))}
    </div>
  );
};

export default App;
