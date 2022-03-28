function Track({image,name,detail1,detail2}) {
    return(
        <div className="song-container">
            <img src={image} className="song-pic" id="song-pic"/>
            <h1 className="song-title" id="song-title">{name}</h1>
            <h2 className="song-detail" id="song-detail">{detail1} - {detail2}</h2>
            <input className="btn-select" type="submit" value="Select"/>
        </div>
    )
}

export default Track;