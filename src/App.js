import React, { useEffect } from 'react';
import Song from './components/track/song.js';
import './components/track/song.css';


const CLIENT_ID = "351d2052bbdb4c60be817eaea55f80ad";
const ENDPOINT = "https://accounts.spotify.com/authorize";
const URI_CALLBACK = "http://localhost:3000"
const SCOPES = "playlist-modify-private";

const getParamsFromAuth = (hash) => {
  const string = hash.substring(1);
  const paramsFromURL = string.split("&");
  const paramsKeyValue = paramsFromURL.reduce((keyurl, valueurl) => {
    const [key,value] = valueurl.split("=");
    key[keyurl] = value;
    return key;
  }, {});

  return paramsKeyValue;
}

function App() {
  useEffect(() => {
    if(window.location.hash) {
      const { access_token, expires_in, token_type } = getParamsFromAuth(window.location.hash);

      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", expires_in);
    }
  });

  const handleLogin = () => {
    window.location =  `${ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${URI_CALLBACK}&scope=${SCOPES}&response_type=token&show_dialog=true`
  }
  return (
    <div className='container'>
      <button onClick={handleLogin}>login</button>
      <Song />

    </div> 
  );
    
  
}

export default App;
//reference auth : https://github.com/carmellemillar/carmelle-codes-react-app/blob/main/src/pages/WebApp/WebApp.js
//still not yet done

