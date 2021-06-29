import './App.css';
import React from 'react';
import Car from './Car/Car.js';

function App() {

  // Стили
  // Можно задавать стили через {{}}
  const divStyle = {
    'background': 'red'
  }

  // JSX
  // Только 1 элемент, который оборачивает все!
  return (
    <div>
      <div className="App" style={divStyle}>
        <h1>Hello World!</h1>
      </div>
      <Car name={'Ford'} year={2018}>
        <p style={{color: 'brown'}}>Color</p>
      </Car>
      <Car name={'Audi'} year={2016}>
        <p style={{color: 'blue'}}>Color</p>
      </Car>
      <Car name={'Mazda'} year={2010} />
      <p style={{fontSize: '40px'}}>Hello</p>
    </div>
  );

  //React
  /*
  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement(
      'h1',
      null,
      'Hello World!'
    )
  )
  */
}

export default App;
