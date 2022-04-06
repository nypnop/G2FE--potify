import React, { useEffect, useState } from 'react';
import Song from './components/track/song.js';
import './components/track/song.css';
import {auth} from './grant_flow.js';
import Search from './components/track/search.js'




function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const value = window.location.hash;
    window.location.hash = "";
    if(!token && value) {
      const token = value.split("&")[0].split("=")[1];
      
      window.localStorage.setItem("token", token);   
      setToken(token); 
      console.log(token);
    }
  }, [token]
    
  )

  
  return !token ? (
    
    <div className='container'>
      <div className='link'>
        <a href={auth}>Login</a>
      </div>
      
      <Song />

    </div> 
  ) : <div className='auth-after'>
      <Search token={token} />
      
    
    </div>
  
}

export default App;
//reference : Ridho KM_G2FE3255

