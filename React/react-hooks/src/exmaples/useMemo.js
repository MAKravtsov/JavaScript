import React, {useState, useEffect, useRef, useMemo} from 'react';
import './App.css';

function complexCompute(num) {
  console.log('complexCompute');

  // долгая часть
  let i = 0;
  while(i < 1000000000) i++

  return num * 2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  // кэшируем
  // при новом рендеринге не будет заново создаваться
  const style = useMemo(() => ({
    color: colored ? 'red' : 'green'
  }), [colored])

  // позволяет закэшировать некую сложную функцию
  // чтобы не вызывать ее при каждом рендеринге
  // увеличивает производительность!
  // вторым параметром передаем, при изменении каких параметров, функция все-таки будет вызываться
  const computed = useMemo(() => complexCompute(number), [number]);

  useEffect(() => {
    console.log('style');
  }, [style])

  return (
    <div>
      <h1 style={style}>Number: {computed}</h1>
      <button onClick={() => setNumber(prev => prev + 1)}>Add</button>
      <button onClick={() => setNumber(prev => prev - 1)}>Sub</button>
      <button onClick={() => setColored(prev => !prev)}>Change</button>
    </div>
  );
}

export default App;
