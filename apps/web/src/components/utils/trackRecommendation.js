export const trackRecommendation = async (isrc) => {
    const mbidFetch = await fetch(`https://musicbrainz.org/ws/2/isrc/${isrc}?fmt=json`,
        {
            method:"GET",
        }
    )

    const data = await mbidFetch.json()
    console.log(data)
    console.log(data)
    const mbid = data.recordings[0].id
    
    const res  = await fetch(`https://ws.audioscrobbler.com/2.0/?method=track.getSimilar&mbid=${mbid}&api_key=${import.meta.env.VITE_LAST_FM_API}&format=json&limit=20`, {
        method:"GET",
    })

    const recos = await res.json()
    console.log(recos)


const requests = recos.similartracks.track.map((reco) =>

  fetch(
    `https://musicbrainz.org/ws/2/recording/${reco.mbid}?inc=artists+releases+isrcs&fmt=json`,
    {
      headers: {
        "User-Agent":
          "MyMusicApp/1.0 (youremail@example.com)"
      }
    }
  ).then(res => res.json())
)

const results = await Promise.all(requests)
console.log(results)

}

