function Result({results, playSong}) {

  return (
    <div>
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
            <h1>{track.title}</h1>

            <h2>{track.album.title}</h2>

            <p>{track.artist.name}</p>
          </div>
          </button>
        );
    
      })}
    </div>
  );
}

export default Result;