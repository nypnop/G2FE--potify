// import './song.css';
import Track from './track.tsx'
import React from 'react'
import track from '../../data/track.js'

function Song () {
  const trackList = track.map((song, idx) => {
    return (
        <Track key={idx}
        image={song.album.images[1].url}
        name={song.name}
        detail1={song.artists[0].name}
        detail2={song.album.name} />
    )
  })
  return (
        <div className="container">
            <h1 className="title">Track Info</h1>
            {trackList}
        </div>
  )
} export default Song
