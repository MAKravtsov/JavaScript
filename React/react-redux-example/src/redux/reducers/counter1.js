import {ADD, SUB, ADD_NUMBER, ADD2} from '../actions/actionTypes'

// Глобальное состояние
const initialState = {
    counter: 0
}

// Функция в зависимости от action
export default function counter1(state = initialState, action) {
    switch(action.type) {
        case ADD: return {counter: state.counter + 1}
        case SUB: return {counter: state.counter - 1}
        case ADD_NUMBER: return {counter: state.counter + action.payload}
        default: return state;
    }
}