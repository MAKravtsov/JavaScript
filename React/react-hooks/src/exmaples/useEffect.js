import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [type, setType] = useState('users')
  const [data, setData] = useState([])
  const [pos, setPos] = useState({x:0, y:0})

  const mouseMoveHandler = (event) => {
    setPos({
      x: event.clientX,
      y: event.clientY,
    })
  }

  // Отслеживаем изменение каких-либо state, указан вторым параметром
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))

          
    // При удалении компонента удаляем лисенер
    // НЕ УДАЛЯЕТСЯ
    return () => {
      window.removeEventListener('mousemove', (event) => mouseMoveHandler(event))
    }
  }, [type])

  // Аналог componentDidMount - вызывается 1 раз в начале
  useEffect(() => {
    console.log('componentDidMount')

    // добавляем лиссенер на движение мышки
    window.addEventListener('mousemove', (event) => mouseMoveHandler(event))
  }, [])

  // Вызывается при любом изменении
  useEffect(() => {

  })

  return (
    <div>
      <h1>Ресурс: {type}</h1>
      <button onClick={() => {setType('users')}}>Пользователи</button>
      <button onClick={() => {setType('todos')}}>Todo</button>
      <button onClick={() => {setType('posts')}}>Посты</button>
      <pre>{JSON.stringify(pos, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
