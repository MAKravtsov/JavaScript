import React from 'react';

// компонент высшего уровня для добавления класса
const withClass = (Component, clasName) => {
    return (props) => {
        return (
            <div className={clasName}>
                <Component {...props}/>
            </div>
        )
    }
}

export default withClass;