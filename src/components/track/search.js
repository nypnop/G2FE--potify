
import React, { useEffect, useState } from 'react';
import Track from './track.js';
import './search.css';
import axios from 'axios';
import { Sample } from '../playlist/form-playlist.js';
import { useSelector} from 'react-redux';

const sendFromNetworkCall = (data) => console.log(data);

function Search() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [songs, setSongs] = useState([]);
    const [myText1, setMyText1] = useState("");
    const [myText2, setMyText2] = useState("");
    const [userID, setUserID] = useState([]);
    const [playlistID, setPlaylistID] = useState("");

    const requestBodyCreatePlaylist = {name: myText1,
        description: myText2,
        public: false
    };

    const token = useSelector(state=> state.user.token);
    

    useEffect(() => {
        if(token){
            getUserID();
        }
        
    }, [token])

    const getUserID = async () =>{
        const responseUser = await

        axios.get('https://api.spotify.com/v1/me', {headers : {
            Authorization : "Bearer " + token
        }})
            .then(response => response.data)
        // const userID = responseUser.id;
        console.log(responseUser);
        setUserID(responseUser);
        
    }
    console.log(userID.id);

    const createPlaylist = ()=>{ 
        
        axios({
            method: 'post',
            url: `https://api.spotify.com/v1/users/${userID.id}/playlists`,
            data: requestBodyCreatePlaylist,
            headers : {
                Authorization : "Bearer " + token
            },
        })
            .then(response => setPlaylistID(response.data.id))
          
    } 
    console.log(playlistID);

    const handleForm = (e) => {
        e.preventDefault();
        if(myText1.length >= 10){
            alert("Judul tidak boleh lebih dari 10 karakter");
        } else {
            sendFromNetworkCall({ myText1, myText2 });
            alert('Sukses menambahkan playlist');
            createPlaylist();
        } 

        
    };

    const handleMyText1 = (e) => {
        setMyText1(e.target.value);
    };

    const handleMyText2 = (e) => {
        setMyText2(e.target.value);
    };

    const changeBool = (id) => {
        let bool = false;
        for(let i=0; i<selected.length; i++){
            if(selected[i]===id){
                bool=true;
            }
        } return bool;
    }

    const addToList = (id) => {
        const temp = selected;
        temp.push(id);
        setSelected(temp);
        console.log(selected);
    }

    const deletefromList = (id) => {
        const temp = selected;
        for(let i =0; i<selected.length;i++){
            if(selected[i]===id){
                temp.splice(i,1);
            }
        } setSelected(temp);
    }
    
    const searchSong = async () =>{
        if(search.length>0){
            const responseSongs = await
            
            axios.get(`	https://api.spotify.com/v1/search?q=${search}&type=track&limit=5`, {headers : {
                Authorization : "Bearer " + token 
            }})
                .then(response => response.data)
            console.log(responseSongs);       
            setSongs(responseSongs.tracks.items);
            
            


        }
    }

    const getPlaylist = async () =>{
        const responseGetPlaylist = await
            axios({
                method: 'get',
                url: `https://api.spotify.com/v1/me/playlists`,
                headers : {
                    Authorization : "Bearer " + token
                },
            })
                .then(response=>response.data)
            console.log(responseGetPlaylist);
    }

    const addToPlaylist = async () =>{
        
        const responseAddPlaylist = await
            axios({
                method: 'post',
                url: `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
                headers : {
                    Authorization : "Bearer " + token
                },
                data : {
                    uris : selected
                }
            })
                .then(response => response.data)
            console.log(responseAddPlaylist);
    }
   

    return(
        
            <div className="search-section">
                <div className='search-bar'>
                    <input className="text-section" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Cari apa yang kamu inginkan"/>
                    <input className="btn-section" type="submit" value="Cari" onClick={searchSong}/>
                </div>
                <Sample handleForm={handleForm} handleMyText1={handleMyText1} handleMyText2={handleMyText2}
                    myText1={myText1} myText2={myText2} />
                <div className='button-addition'>
                    <button className="add-playlist" onClick={addToPlaylist}>Add to playlist</button>
                    <button className="check-playlist" onClick={getPlaylist}>Check playlist</button>
                </div>    
                <div className='container'>
                    {songs.map((song)=>{
                        const status=changeBool(song.uri);
                        return(
                            <Track image={song.album.images[1].url} key={song.uri} name={song.name} detail1={song.artists[0].name}
                            detail2={song.album.name} id={song.uri} props={status} click={addToList} unclick={deletefromList} />
                        )
                    })}
                </div>
                
            </div>
    );
} export default Search;