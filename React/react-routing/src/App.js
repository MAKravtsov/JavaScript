import './App.scss';
import About from './About/About'
import Cars from './Cars/Cars'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import CarDetail from './CarDetail/CarDetail';
import { useState } from 'react';

function App() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
           {/* Смена страницы без перезагрузки страницы */}
            <NavLink 
              to="/" 
              exact 
              activeClassName={'wfm-active'}>Home</NavLink>
          </li>
          <li>
            <NavLink 
              to="/about"
              activeStyle={{color: 'blue'}}>About</NavLink>
          </li>
          <li>
            <NavLink to={{
              pathname: "/cars",
              /* search: '?a=1&b=2',  Get параметры 
              hash: "wfm-hash" */
            }}>Cars</NavLink>
          </li>
        </ul>
      </nav>

    <hr/>
    
    <div style={{textAlign: 'center'}}>
      <h3>Is logged in {isLoggedIn ? 'TRUE' : 'FALSE'}</h3>
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </div>
    <hr/>

  {/* Отображает первое совпадение url (чтобы не использовать exact) */}
  <Switch>
    {/* localhost:3000 */}
    <Route 
      path="/"
      exact /* Полное совпадения адреса */
      render={() => <h1>Home Page</h1>}/>
    {
      isLoggedIn 
      ? <Route 
          path="/about"
          component={About}/>
      : null
    }

    <Route 
      path="/cars/:name"
      component={CarDetail}/>

    <Route 
      path="/cars"
      component={Cars}/>

    {/* Роутинг по умолчанию (ошибка 404) - первый способ*/}
    {/* <Route 
      render={() =>
        <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>
      }/> */}

    {/* Роутинг по умолчанию (ошибка 404) - второй способ*/}
    <Redirect to={'/cars'}/>
  </Switch>
  </div>
  );
}

export default App;
