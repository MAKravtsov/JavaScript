import { Component } from "react";
import classes from './Drawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink } from "react-router-dom";

const links = [
    {to: "/", label: 'Список', exact: true},
    {to: "/auth", label: 'Авторизация', exact: false},
    {to: "/quiz-creater", label: 'Создать тест', exact: false},
]

// Навигационное меню (при нажатии на "бургер")
class Drawer extends Component {
    clickHandler = () => {

        this.props.onClose();
    }

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink 
                        to={link.to} 
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}>
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer]

        if(!this.props.isOpen) {
            cls.push(classes.close);
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null}

            </>
        )
    }
}

export default Drawer;