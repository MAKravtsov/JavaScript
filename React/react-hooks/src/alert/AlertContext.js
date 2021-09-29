import React, { useContext, useState, useReducer } from "react";

const AlertContext = React.createContext();

export const useAlert = () => {
    // можно не использовать AlertContext.Consumer
    // то есть useContext нужен, чтобы не передавать
    // что-то из одного компонента в другой, а использовать context
    return useContext(AlertContext);
}

// ActionTypes
const SHOW_ALERT = 'SHOW_ALERT';
const HIDE_ALERT = 'HIDE_ALERT';

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT: return {
            ...state, visible: true, text: action.text
        }
        case HIDE_ALERT: return {
            ...state, visible: false
        }
        default: return state;
    }
}

// Интересный вариант, когда context закладываем в отдельный компонент
// и вся работа с ним в этом же компоненте
export const AlerProvider = ({children}) => {
    // использование reducer
    // позволяет взаимодействовать со state с помощью reducer
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    // Actions
    const show = (text) => dispatch({type: SHOW_ALERT, text})
    const hide = () => dispatch({type: HIDE_ALERT})

    return (
        <AlertContext.Provider value={{
            visible: state.visible,
            text: state.text,
            show,
            hide
        }}>
            {children}
        </AlertContext.Provider>
    )
}