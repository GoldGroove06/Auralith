import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './result'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState(null)

  const getSearch = async () => {
    const myHeaders = new Headers();
myHeaders.append("accept", "application/vnd.api+json");
myHeaders.append("Authorization", `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`);
    const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};
console.log(import.meta.env.VITE_BEARER_TOKEN)
    const res = await fetch(`https://openapi.tidal.com/v2/searchResults/${search}?limit=25&offset=0&explicitFilter=INCLUDE&countryCode=US&include=albums%2Calbums.coverArt%2Calbums.artists%2Ctracks%2Ctracks.artists%2Ctracks.albums%2Ctracks.albums.coverArt%2Cartists%2Cplaylists%2Cvideos`, requestOptions)
    const data = await res.json()
    console.log(data)
    setResults(data.included)
    console.log(results)
  }


  async function getQobuzId(isrc) {
   
  try {
    const res = await fetch(
      `https://qobuz.kennyy.com.br/api/get-music?q=${isrc}&offset=0`
    );

    const data = await res.json();

    const qobuzId =
      data.data?.tracks?.items?.[0]?.id;
    console.log(data);  
    console.log(qobuzId);

    return qobuzId;
  } catch (err) {
    console.error(err);
  }
}

  async function playMusic() {
    const qobuzId = await getQobuzId("USAT22301679");
    console.log(qobuzId);
    const streamUrl = await fetch(`https://qobuz.kennyy.com.br/api/download-music?track_id=${qobuzId}&quality=27`);
    const data = await streamUrl.json();
    console.log(data);
    console.log(qobuzId);
    const audio = new Audio(
  data.data.url
);

audio.play();
  }
  return (
    <>
      <div>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={getSearch}>Search</button>
        {results && <Result results={results} />}
      </div>
      <div>
        <button onClick={playMusic}>Play Music</button>
      </div>
    </>
  )
}

export default App
