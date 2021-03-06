import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../../store/actions/auth";

const { Component } = require("react");

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }

    render() {
        return <Redirect to='/'></Redirect>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(null, mapDispatchToProps)(Logout);