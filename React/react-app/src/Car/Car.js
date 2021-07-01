import './Car.css'
// Благодаря пакету мы можем в JS обрабатывать события ":hover" и тд
import Radium from 'radium'
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
const car = (props) => {
    // Массив классов
    const inputClasses = ['input'];

    // Динамическое изменения классов
    if(props.name) {
        inputClasses.push('green');
    } else {
        inputClasses.push('red');
    }
    if(props.name.length > 4) {
        inputClasses.push('bold');
    }

    const style = {
        border: '1px solid #ccc',
        boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, .14)',
        //Только благодаря Radium
        ':hover': {
            border: '1px solid #aaa',
            boxShadow: '0 4px 15px 0 rgba(0,0,0,.25)',
            cursor: 'pointer'
        }
    }

    return (
        <div className="car" style={style}>
            <h3>CarName: {props.name}</h3>
            <p>Year: 
                <strong>{props.year}</strong>
            </p>
            { props.children }
            <input 
                type="text" 
                onChange={props.onChangeName} 
                value={props.name}
                className={inputClasses.join(' ')}></input>
            <div>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Radium(car);