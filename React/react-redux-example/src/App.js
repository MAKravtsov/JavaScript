import './App.css';
import { Component } from 'react';
// подключение глобального state
import {connect} from 'react-redux'
import Counter from  '../src/Counter.js'
import {add, sub, addNumber, addAsync} from '../src/redux/actions/actions'

const toAdd = 25;

class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter {this.props.counter}</h1>
        <button onClick={this.props.onAdd}>Добавить</button>
        <button onClick={this.props.onSub}>Вычесть</button>
        <button onClick={this.props.onAddAsync.bind(this, 10)}>Асинхронно добавить 10</button>
        <button onClick={this.props.onAddNumber.bind(this, toAdd)}>Добавить {toAdd}</button>
        <Counter/>
      </div>
    )
  }
}

// получение необходимых свойств из глобального state
function mapStateToProps(state) {
  return {
    counter: state.counter1.counter
  }
}

// создание диспатчеров - то есть actions
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onAddNumber: (number) => dispatch(addNumber(number)),
    onAddAsync: (number) => dispatch(addAsync(number))
  }
}

// так необходимо вызывать при работе с redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
