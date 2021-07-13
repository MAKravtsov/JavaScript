import React from "react";
import Auxilary from '../hoc/Auxilary';
import Cpunter2 from '../Counter2/Counter2'
import Counter2 from "../Counter2/Counter2";

export default class Counter extends React.Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        //this.setState({counter: this.state.counter + 1})

        // защита от асинхронности
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    substractCounter = () => {
        this.setState({counter: this.state.counter - 1})
    }

    render() {
        // Способ задания через массив
       /*  return [
            // key, чтобы реакт к нему мог нормально обращаться
            <h2 key={'1'}>Counter {this.state.counter}</h2>,
            <button key={'2'} onClick={this.addCounter}>+</button>,
            <button key={'3'} onClick={this.substractCounter}>-</button>
        ] */

        // использование React.Fragment = <>
        /* return (
            <React.Fragment>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={this.substractCounter}>-</button>
            </React.Fragment>
        ) */

        return (
            <Auxilary>
                <h2>Counter {this.state.counter}</h2>
                <Counter2/>
                <button onClick={this.addCounter}>+</button>
                <button onClick={this.substractCounter}>-</button>
            </Auxilary>
        )
    }
}