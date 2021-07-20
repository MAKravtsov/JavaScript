import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";
import { Route, Switch } from "react-router-dom";
import QuizCreator from "./containers/QuizCreator/QuizCreator";
import QuizList from "./containers/QuizList/QuizList";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
    <Layout>
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
          path="/"
          component={QuizList}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
