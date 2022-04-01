import React, { useEffect, useState } from 'react';


function Track({image,name,detail1,detail2,props,click,unclick,id}) {
    const [clicked, setClicked] = useState(props);
    const clickedbtn = () =>{
        setClicked(!clicked);
        if(clicked){
            unclick(id);
        } else {
            click(id);
        }
    }
    return(
        <div className="song-container">
            <img src={image} className="song-pic" id="song-pic"/>
            <h1 className="song-title" id="song-title">{name}</h1>
            <h2 className="song-detail" id="song-detail">{detail1} - {detail2}</h2>
            <button className="btn-select"  onClick={clickedbtn}>{clicked ? "Deselect" : "Select"}</button>
        </div>
    )
}

export default Track;