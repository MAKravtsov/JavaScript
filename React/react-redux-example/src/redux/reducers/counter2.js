import {ADD2} from '../actions/actionTypes'

// Глобальное состояние
const initialState = {
    counter: 200
}

// Функция в зависимости от action
export default function counter2(state = initialState, action) {
    switch(action.type) {
        // ОБЯЗАТЕЛЬНО названия actions должны быть разными в reducers
        case ADD2: return {counter: state.counter + action.payload}
        default: return state
    }
}