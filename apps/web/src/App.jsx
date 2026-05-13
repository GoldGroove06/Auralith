import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './result'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState(null)
  const audioRef = useRef(null)

  function parseTidalSearchResponse(response) {
  const included = response.included || [];
  const data = response.data || [];

  // maps
  const artistsMap = {};
  const albumsMap = {};
  const artworksMap = {};

  // build lookup maps
  included.forEach((item) => {
    if (item.type === "artists") {
      artistsMap[item.id] = item;
    }

    if (item.type === "albums") {
      albumsMap[item.id] = item;
    }

    if (item.type === "artworks") {
      artworksMap[item.id] = item;
    }
  });

  // only tracks
  const tracks = included.filter(
    (item) => item.type === "tracks"
  );

  // parse tracks
  return tracks.map((track) => {
    const attrs = track.attributes;

    // artist
    const artistId =
      track.relationships?.artists?.data?.[0]?.id;

    const artist =
      artistsMap[artistId];

    // album
    const albumId =
      track.relationships?.albums?.data?.[0]?.id;

    const album =
      albumsMap[albumId];

    // artwork
    const artworkId =
      album?.relationships?.coverArt?.data?.[0]?.id;

    const artwork =
      artworksMap[artworkId];

    // best artwork url
    const artworkUrl =
      artwork?.attributes?.files?.find(
        (f) => f.meta.width === 640
      )?.href ||
      artwork?.attributes?.files?.[0]?.href ||
      null;

    return {
      id: track.id,

      title: attrs.title,

      isrc: attrs.isrc,

      duration: attrs.duration,

      explicit: attrs.explicit,

      artist: artist
        ? {
            id: artist.id,
            name: artist.attributes.name,
          }
        : null,

      album: album
        ? {
            id: album.id,
            title: album.attributes.title,
            releaseDate:
              album.attributes.releaseDate,
          }
        : null,

      artwork: artwork
        ? {
            id: artwork.id,
            url: artworkUrl,
            files: artwork.attributes.files,
          }
        : null,
    };
  });
}

  const getSearch = async () => {
    const myHeaders = new Headers();
myHeaders.append("accept", "application/vnd.api+json");
myHeaders.append("Authorization", `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`);
    const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};



    const res = await fetch(`https://openapi.tidal.com/v2/searchResults/${search}?explicitFilter=INCLUDE&countryCode=US&include=tracks,tracks.artists,tracks.albums,tracks.albums.coverArt`, requestOptions)
    const data = await res.json()
    setResults(parseTidalSearchResponse(data))
    
  }


  async function getQobuzId(isrc) {
   
  try {
    const res = await fetch(
      `https://qobuz.kennyy.com.br/api/get-music?q=${isrc}&offset=0`
    );

    const data = await res.json();

    const qobuzId =
      data.data?.tracks?.items?.[0]?.id;

    return qobuzId;
  } catch (err) {
    console.error(err);
  }
}

  async function playSong(isrc) {
    const qobuzId = await getQobuzId(isrc);
    const streamUrl = await fetch(`https://qobuz.kennyy.com.br/api/download-music?track_id=${qobuzId}&quality=27`);
    const data = await streamUrl.json();
    audioRef.current.src = data.data.url;
    audioRef.current.play();
  }
  return (
    <div style={{position: "relative"}}>
    <nav>
      <h1>Auralith</h1>
    </nav>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", maxHeight: "70vh", overflowY: "auto"}}>
       
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={getSearch}>Search</button>
        {results && <Result results={results} playSong={playSong}/>}
      </div>
     <audio ref={audioRef} controls style={{position: "absolute", bottom: 0}}></audio>
    </div>
  )
}

export default App
