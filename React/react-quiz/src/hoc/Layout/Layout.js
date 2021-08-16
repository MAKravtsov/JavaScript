import React, { Component } from 'react';
import classes from './Layout.css';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import { connect } from 'react-redux';

// "Обложка" - то, что есть на всех траницах - навигационное меню, "бургер"
class Layout extends Component {
    state = {
        menu: false
    }

    toggleMenyHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    onCloseHandler = () => {
        this.setState({
            menu: false
        })
    }

    render() {
        return (
            <div className={classes.Layout}>
                <Drawer
                    isOpen={this.state.menu}
                    onClose={this.onCloseHandler}
                    isAuth={this.props.isAuth}/>

                <MenuToggle 
                    onToggle={this.toggleMenyHandler}
                    isOpen={this.state.menu}/>

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: !!state.auth.token
    }
}

export default connect(mapStateToProps)(Layout);