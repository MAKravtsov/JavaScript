import React, {useState} from 'react';
import './App.css';


function computeInitialCounter() {
  return Math.trunc(Math.random() + 20)
}
// this.setState() -> this.render()

function App() {
  // Если не надо делать каких-либо вычислений при задании state
  /*
    const [counter, setCounter] = useState(0);
  */

  const [counter, setCounter] = useState(() => {
    return computeInitialCounter();
  });

  // не принято работа с объектами
  const [state, setState] = useState({
    title: 'Счетчик',
    data: Date.now()
  })

  function increment() {
    // Когда хотим несколько раз поменять состояние, а функция асинхронная
    setCounter((prevState) => {
      return prevState + 1;
    })
  }

  function decrement() {
    setCounter(counter-1);
  }

  function changeTitle() {
    // Если меняем состояние, то полностью (не как в классах, там меняется state точечно)
    setState(prev => { 
      return {
        ...prev, title: 'Новое название'
      }
    })
  }

  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment}>Добавить</button>
      <button onClick={decrement}>Убрать</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={changeTitle}>Изменить название</button>
    </div>
  );
}

export default App;
