// Благодаря пакету мы можем в JS обрабатывать события ":hover" и тд
/*import Radium from 'radium';*/

import React from 'react';

// МОЖНО ИСПОЛЬЗОВАТЬ ТОЛЬКО из-за расширения node-sass!!!
import classes from './Car.module.scss';

import withClass from "../hoc/withClass";

// определяет типы данных
import PropTypes from 'prop-types';

// Создание сущности

// Длинная запись
/*
function Car() {
    return (
        <h2>
            This is the car
        </h2>
    )
}
*/

// Короткая запись
/*
const car = (props) => {
    
}
*/

// Так большая нагрузка, лучше в виде функций
// но зато можно использовать state и жизненные циклы
class Car extends React.Component {
    constructor(props) {
        super(props);

        // Создание референции (доступа к DOM элементу)
        this.inputRef = React.createRef();
    }

    // для синхронизации локального state
    // с приходящими свойствами
    // редко используется
    // устаревшие методы
    componentWillReceiveProps(nextProps) {
        console.log('Car componentWillReceiveProps', nextProps);
    }

    // true - компонент должен изменится и перерисовываем его
    // false - не нужна перерисовка
    // для оптимизации
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Car shouldComponentUpdate', nextProps, nextState);
        let toReturn = nextProps.name.trim() !== this.props.name.trim();
        return toReturn;
    }

    // Компонент будет изменен
    // для изменения state
    // устаревший метод
    componentWillUpdate(nextProps, nextState) {
        console.log('Car componentWillUpdate', nextProps, nextState);
    }

    // static - обязательно
    // аналогичен componentWillUpdate
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('Car getDerivedStateFromProps', nextProps, prevState)
        return prevState;
    }

    // получение DOM дерева до обноления
    getSnapshotBeforeUpdate() {
        console.log('getSnapshotBeforeUpdate');
    }

    // Компонент изменился
    componentDidUpdate() {
        console.log('Car componentDidUpdate');
    }

    // после удаления компонента
    // очищение таймеров, подписок, всей  памяти
    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    componentDidMount() {
        if(this.props.index === 0) {

            // плохой способ
            /*this.inputRef.focus();*/

            // хороший способ
            this.inputRef.current.focus()
        }
    }

    render() {
        console.log('Car render');

        // создание ошибки для проверки ErrorBoundary
        /*
        if(Math.random() > 0.7) {
            throw new Error('Car random failed');
        }
        */

        // Массив классов
        const inputClasses = [classes.input];

        // Динамическое изменения классов
        if(this.props.name) {
            inputClasses.push(classes.green);
        } else {
            inputClasses.push(classes.red);
        }
        if(this.props.name.length > 4) {
            inputClasses.push(classes.bold);
        }

        return (
            <>
                <h3>CarName: {this.props.name}</h3>
                <p>Year: 
                    <strong>{this.props.year}</strong>
                </p>
                { this.props.children }
                <input 
                    // Референция (обращение к DOM элементам свыше) - ПЛОХОЙ СПОСОБ
                    /*ref={(inputRef) => this.inputRef = inputRef}*/
                    
                    // Референция - ХОРОШИЙ СПОСОБ
                    ref={this.inputRef}

                    type="text" 
                    onChange={this.props.onChangeName} 
                    value={this.props.name}
                    className={inputClasses.join(' ')}></input>
                <div>
                    <button onClick={this.props.onDelete}>Delete</button>
                </div>
            </>
        )
    }
}

// задание типов для props
Car.propTypes = {
    // isRequired - обязательный компонент
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func,
}

//export default Radium(Car);
export default withClass(Car, classes.car);