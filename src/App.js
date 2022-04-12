import React, { useEffect} from 'react';
import Song from './components/track/song.js';
import './components/track/song.css';
import Login from './components/Login/login.js';
import Search from './components/track/search.js'
import {useSelector, useDispatch} from 'react-redux';
import { setUserToken } from './store/user.js'
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";





function App() {

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  useEffect(() => {
    const value = window.location.hash;
    window.location.hash = "";
    if(!token && value) {
      const token = value.split("&")[0].split("=")[1];
      
      window.localStorage.setItem("token", token);   
      dispatch(setUserToken(token)); 
      console.log(token);
    }
  }, [token, dispatch]
    
  );

  
  return (
    <Router>
      <Switch>
        <Route path="/create-playlist">
          { token ? (
            <div className='auth-after'>
              <Search />
            </div>
          ) : (
            <Redirect to ="/" />
          ) }
        </Route>
        <Route path="/">
          { !token ? (
            <Login />
          ) : (
            <Redirect to="/create-playlist"/>
          )}
        </Route>
      </Switch>
    </Router>
  ) 
}

export default App;
//reference : Ridho KM_G2FE3255

