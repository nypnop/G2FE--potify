import './form-playlist.css';
const Sample = ({handleForm, handleMyText1, handleMyText2, myText1, myText2}) => {
  

  return (
    <>
      <div className="container-form">
      
        <div className="form-box">
          <h1>Create Playlist</h1>
          <form >
            <label htmlFor="myText1">Judul</label>
            <input
              id="myText1"
              type="text"
              name="myText1"
              value={myText1}
              onChange={handleMyText1}
              required
            />
            <label htmlFor="myText2">Deskripsi</label>
            <textarea
              id="myText2"
              type="text"
              name="myText2"
              value={myText2}
              onChange={handleMyText2}
              required
            />
            <button onClick={handleForm} type="submit">Submit</button>
          </form>
        </div>
        
      </div>
    </>
  );
};

export { Sample };
