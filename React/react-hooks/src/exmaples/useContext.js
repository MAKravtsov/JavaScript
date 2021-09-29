import React, { useContext, useState } from "react";

const AlertContext = React.createContext();

export const useAlert = () => {
    // можно не использовать AlertContext.Consumer
    // то есть useContext нужен, чтобы не передавать
    // что-то из одного компонента в другой, а использовать context
    return useContext(AlertContext);
}

// Интересный вариант, когда context закладываем в отдельный компонент
// и вся работа с ним в этом же компоненте
export const AlerProvider = ({children}) => {
    const [alert, setAlert] = useState(false);

    const toggle = () => {
        setAlert(!alert);
    }

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle: toggle
        }}>
            {children}
        </AlertContext.Provider>
    )
}