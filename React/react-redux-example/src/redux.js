const redux = require('redux')

const initialState = {
    counter: 0
}

// Reducer - функция изменения state
const reducer = (state = initialState, action) => {
    if(action.type === 'ADD') {
        return {
            counter: state.counter + 1
        }
    }
    if(action.type === 'SUB') {
        return {
            counter: state.counter - 1
        }
    }
    if(action.type === 'ADD_NUMBER') {
        return {
            counter: state.counter + action.value
        }
    }

    return state;
}

// Store - место, где зранятся все данные
const store = redux.createStore(reducer)

/* подспика на изменение store */
store.subscribe(() => {
    console.log('Subscribe', store.getState())
})

// Actions- JS объект
const addCounter = {
    type: 'ADD'
}
store.dispatch(addCounter);

const subCounter = {
    type: 'SUB'
}
store.dispatch(subCounter);

const addNumberCounter = {
    type: 'ADD_NUMBER',
    value: 10
}
store.dispatch(addNumberCounter);