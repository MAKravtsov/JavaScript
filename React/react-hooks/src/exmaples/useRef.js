import React, {useState, useEffect, useRef} from 'react';
import './App.css';

function App() {

  // ОШИБКА: будет рекурсия рендеринга
  /*
    const[renders, setRenders] = useState(1)
    useEffect(() => {
      setRenders(prev => prev + 1);
    })
  */

  const [renders, setRenders] = useState('');

  // Если мы хотим сохранить что-то между рендерами
  // то есть не хотим вызывать useEffect при их изменении
  // то вместо useState используем useEffect
  const renderCount = useRef(1);

  // использование useRef как ссылки к какому-то DOM элементу
  // часто используется, чтобы фокусировать на определенном элементе
  const inputRef = useRef(null);

  // Для сохранения предыдущего значения
  const prevValue = useRef('');
  
  useEffect(() => {
    renderCount.current++;
    console.log(inputRef.current.value);
  })

  useEffect(() => {
    prevValue.current = renders
  }, [renders])

  const focus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      <h1>Количество рендеров: {renderCount.current}</h1>
      <h2>Прошлое состояние: {prevValue.current}</h2>
      <input 
        ref={inputRef}
        type='text' 
        onChange={(e) => setRenders(e.target.value)}
        value={renders}></input>
      <button onClick={focus}>Focus</button>
    </div>
  );
}

export default App;
