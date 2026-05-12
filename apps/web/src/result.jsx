function Result({results}) {

  return (
    <div>
      {results.map((album) => {
        // const coverId =
        //   album.relationships.coverArt.data[0]?.id;

        // const imageUrl = album.relationships.coverArt.data.links.self

        return (
          <div key={album.id}>
            {/* <img
              src={imageUrl}
              alt={album.attributes.title}
              width={200}
            /> */}

            <h2>{album.attributes.title}</h2>

            <p>{album.attributes.releaseDate}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Result;