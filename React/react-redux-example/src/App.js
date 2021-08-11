import './App.css';
import { Component } from 'react';
// подключение глобального state
import {connect} from 'react-redux'

const toAdd = 25;

class App extends Component {
  render() {
    return (
      <div>
        <h1>Counter {this.props.counter}</h1>
        <button onClick={this.props.onAdd}>Добавить</button>
        <button onClick={this.props.onSub}>Вычесть</button>
        <button onClick={this.props.onAddNumber}>Добавить {toAdd}</button>
      </div>
    )
  }
}

// получение необходимых свойств из глобального state
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

// создание диспатчеров - то есть actions
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
    onSub: () => dispatch({type: 'SUB'}),
    onAddNumber: () => dispatch({type: 'ADD_NUMBER', value: toAdd})
  }
}

// так необходимо вызывать при работе с redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
