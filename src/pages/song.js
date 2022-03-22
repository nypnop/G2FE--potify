import './song.css';
import data from '../data.js';

function Song() {
    return(
        <div class="container">
            <h1 class="title">Track Info</h1>
            <div class="song-container">
                <img src={data.album.images[1].url} class="song-pic" id="song-pic"/>
                <h1 class="song-title" id="song-title">{data.name}</h1>
                <h2 class="song-detail" id="song-detail">{data.artists[0].name} - {data.album.name}</h2>
                <input class="btn-select" type="submit" value="Select"/>
            </div>
        </div>
    )
} export default Song;