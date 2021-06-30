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

// Запись чуть лучше
/*
const car = () => {
    return (
        <h2>
            This is the car
        </h2>
    )
}
*/

// Короткая запись
const car = (props) => (
    <div className="car">
        <h3>CarName: {props.name}</h3>
        <p>Year: 
            <strong>{props.year}</strong>
        </p>
        { props.children }
        <input type="text" onChange={props.onChangeName} value={props.name}></input>
        <div>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    </div>
)

export default car;