function Result({results, playSong}) {

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "5rem",}}>
      {results.map((track) => {
        // const coverId =
        //   album.relationships.coverArt.data[0]?.id;

        // const imageUrl = album.relationships.coverArt.data.links.self
      
        return (
            <button onClick={() => {playSong(track.isrc)}}>
          <div key={track.id}>
            <img
              src={track.artwork?.url}
              alt={track.album.title}
              width={200}
            />
            <h3>{track.title}</h3>

            <h5>{track.album.title}</h5>

            <p>{track.artist.name}</p>
          </div>
          </button>
        );
    
      })}
    </div>
  );
}

export default Result;