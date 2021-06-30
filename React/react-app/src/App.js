import './App.css';
import React, { Component } from 'react';
import Car from './Car/Car.js';

class App extends Component {

  // Состояние
  state = {
    cars: [
      {name: 'Ford', yaer: 2018},
      {name: 'Audi', yaer: 2016},
      {name: 'Mazda', yaer: 2010}
    ],
    pageTitle: 'React components' ,
    showCars: false
  }

  // Изменение наименования заголовка
  changeTitleHandler = (newTitle) => {
    // ТОЛЬКО ТАК можно изменить состояние
    this.setState({
      pageTitle: newTitle
    })
  }

  // Удаление car
  deleteHandler(index) {
    let cars = this.state.cars.concat();

    // Удаление
    cars.splice(index, 1);

    this.setState({
      cars
    })
  }

  // Событие изменения input (изменения наименования заголока)
  handleInput = (event) => {
    let newTitle = event.target.value;
    this.setState({
      pageTitle: newTitle
    })
  }

  // скрытие/раскрытие cars
  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  // Событие изменения input (изменения наименования car)
  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;

    // способ клонирования массива
    const cars = [...this.state.cars];
    cars[index] = car;

    this.setState({
      cars: cars
    })
  }

  render() {
    const pageTitle = this.state.pageTitle;

    const cars = () => {
      if(this.state.showCars) {
        // Итерирование
        return this.state.cars.map((car, index) => {
          return (
            <Car 
              /* специальный элемент в JSX для списков, иначе будет warning */
              key={index}
              name={car.name} 
              year={car.year}
              onChangeName={(event) => this.onChangeName(event.target.value, index)}
              onDelete={this.deleteHandler.bind(this, car.name)}>
              <p style={{color: setBg()}}>Color</p>
            </Car>
          )
        })
      } else {
        return null;
      }
    }

    // Стили
    // Можно задавать стили через {{}}
    const divStyle = {
      'background': 'red'
    }
  
    // random цвет
    const setBg = () => {
      return "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    const toggleCarsButtonName = () => {
      return this.state.showCars ? "Hide" : "Show";
    }

    // JSX
    // Только 1 элемент, который оборачивает все!
    // !!! this.changeTitleHandler.bind - БЫСТРЕЕ, чем () => this.changeTitleHandler
    return (
      <div>
        <div className="App" style={divStyle}>
          <h1>{pageTitle}</h1>
        </div>
        {/*можем вставлять просто JS код (аналог ng-repeat в Angular)
          ЗАПРЕЩЕНО: for, if и тд*/}
        { 
          /* 1ый способ 
            Тернарный оператор: в JSX можно его использовать*/

          /* 2ой способ */
          cars()
        }
        <div>
          <button onClick={this.toggleCarsHandler}>{toggleCarsButtonName()}</button>
        </div>
        <p style={{fontSize: '40px'}}>Hello</p>
        <input type="text" onChange={this.handleInput}></input>
        <button onClick={this.changeTitleHandler.bind(this, 'Changed!')}>ChangeTitle</button>
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
}

export default App;
