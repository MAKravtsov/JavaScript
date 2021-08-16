import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Switch, withRouter } from "react-router-dom";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import Logout from './components/Logout/Logout'
import { Component } from "react";
import { autoLogin } from "./store/actions/auth";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }
  render() {
    let routes = (
      <Switch>
        <Route
          path="/auth"
          component={Auth}></Route>
        <Route
          path="/quiz/:id"
          component={Quiz}></Route>
        <Route
          path="/"
          exact
          component={QuizList}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    )
  
    if(this.props.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/auth"
            component={Auth}></Route>
          <Route
            path="/quiz-creater"
            component={QuizCreator}></Route>
          <Route
            path="/quiz/:id"
            component={Quiz}></Route>
          <Route
            path="/Logout"
            component={Logout}></Route>
          <Route
            path="/"
            exact
            component={QuizList}></Route>
          <Redirect to='/'></Redirect>
       </Switch>
      )
    }
  
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
