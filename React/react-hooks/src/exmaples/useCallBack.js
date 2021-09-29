import React, {useState, useEffect, useRef, useMemo, useCallback} from 'react';
import './App.css';
import { ItemsList } from './ItemsList';

function App() {
  const [number, setNumber] = useState(1);
  const [colored, setColored] = useState(false);

  const style = {
    color: colored ? 'red' : 'green'
  }

  // Аналог useMemo, тоже для оптимизации, чтобы лишний раз
  // не вызывать при рендеринге
  // отличается только тем, что в useMemo - значение
  // а useCallback - функция
  const generateItemsFromAPI = useCallback(() => {
    return new Array(number).fill('').map((_, index) => 'Element ' + (index + 1))
  }, [number])

  return (
    <div>
      <h1 style={style}>Number: {number}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
    
      <ItemsList getItems={generateItemsFromAPI}></ItemsList>
    </div>
  );
}

export default App;
