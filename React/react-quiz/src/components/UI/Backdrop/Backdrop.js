import React from 'react';
import classes from './Backdrop.css';

// Элемент заднего вида (при открытии главного меню делает затемнение и закрывает меню по нажатию на любую часть страницы)
const Backdrop = (props) => {
    return (
        <div 
            className={classes.Backdrop}
            onClick={props.onClick}>

        </div>
    )
}

export default Backdrop;