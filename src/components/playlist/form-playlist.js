import axios from "axios";

const { useState, useEffect } = require("react");

const sendFromNetworkCall = (data) => console.log(data);

const Sample = () => {
  const [myText1, setMyText1] = useState("");
  const [myText2, setMyText2] = useState("");
  const [token, setToken] = useState("");
  const [userID, setUserID] = useState("");
  const user_id =  "2i1r1f8jbh7tukytoglorwyuq";
  const requestBodyCreatePlaylist = {name: 'helo',
    description: 'wkowkw',
    public: false

  };

  useEffect(() => {
    if(window.localStorage.getItem('token')){
        setToken(window.localStorage.getItem('token'))
    }
  })

  const getUserID = async () =>{
    const responseUser = await

    axios.get('https://api.spotify.com/v1/me', {headers : {
        Authorization : "Bearer " + token
    }})
        .then(response => response.data)
    const userID = responseUser.id;
    console.log(userID);
    setUserID(userID);

  }

  const createPlaylist = async ()=>{
      const responsePlaylist = await
      
      axios({
          method: 'post',
          url: `https://api.spotify.com/v1/users/${user_id}/playlists`,
          data: requestBodyCreatePlaylist,
          headers : {
            Authorization : "Bearer " + token
        },
      })
        .then(response => response.data)
    
    console.log(responsePlaylist);
  }

  const handleForm = (e) => {
    e.preventDefault();
    if(myText1.length >= 10){
        alert("Judul tidak boleh lebih dari 10 karakter");
    } else {
        sendFromNetworkCall({ myText1, myText2 });
        getUserID();
        createPlaylist();

    } 

    
  };

  const handleMyText1 = (e) => {
    setMyText1(e.target.value);
  };

  const handleMyText2 = (e) => {
    setMyText2(e.target.value);
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="myText1">Text 1</label>
        <input
          id="myText1"
          type="text"
          name="myText1"
          value={myText1}
          onChange={handleMyText1}
          required
        />
        <label htmlFor="myText2">Text 2</label>
        <textarea
          id="myText2"
          type="text"
          name="myText2"
          value={myText2}
          onChange={handleMyText2}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export { Sample };
