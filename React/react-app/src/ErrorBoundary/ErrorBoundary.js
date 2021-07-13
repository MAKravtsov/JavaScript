import React, {Component} from 'react';

// класс для отвавливания ошибок
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    render() {
        if(this.state.hasError) {
            return(
                <h1 color={{color: 'red'}}>Something wrong</h1>
            )
        } 
        
        return this.props.children;
    }
}

export default ErrorBoundary;