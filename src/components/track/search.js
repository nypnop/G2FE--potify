
import React, { useEffect, useState } from 'react';
import Track from './track.js';
import axios from 'axios';

function Search() {
    const [selected, setSelected] = useState([]);
    const [search, setSearch] = useState("");
    const [songs, setSongs] = useState([]);
    const [token, setToken] = useState("");
    //Todo buat fungsi select sama deselect (add to list and hapus dari list)
    useEffect(() => {
        if(window.localStorage.getItem('token')){
            setToken(window.localStorage.getItem('token'))
        }
    })

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
    return(
        
            <div className="search-section">
            
                <input className="text-section" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Cari apa yang kamu inginkan"/>
                <input className="btn-section" type="submit" value="Cari" onClick={searchSong}/>
                <div>
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