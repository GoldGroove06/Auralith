import { create } from 'zustand'
import { usePlaylistStore } from './playlist';

export const usePlayStore = create((set) => ({
  currentTrackData: null,
  currentTrackUrl: null,
  setCurrentTrackUrl: (trackUrl) => set({ currentTrackUrl: trackUrl }),
  setCurrentTrackData: (trackData) => set({ currentTrackData: trackData }),
  playlist: {},
  addToPlaylist: (trackData) => set((state) => ({
    playlist: {
      ...state.playlist,
      [trackData.isrc]: trackData
    }
  }
  )),
  removeFromPlaylist: (isrc) => set({
    playlist: {}
  })
}))

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


const play = async (isrc, trackData) => {
  console.log("into play function")
  const qobuzId = await getQobuzId(isrc);
  const streamUrl = await fetch(`https://qobuz.kennyy.com.br/api/download-music?track_id=${qobuzId}&quality=27`);
  const data = await streamUrl.json();
  if(usePlayStore.getState().currentTrackData == null) {
    usePlayStore.getState().addToPlaylist(trackData)
  }
  usePlayStore.getState().setCurrentTrackData(trackData)
  usePlayStore.getState().setCurrentTrackUrl(data.data.url)
  return data.data.url
}

export const playNext = async () => {
  console.log("into play next function")
  const currentIsrc = usePlayStore.getState().currentTrackData.isrc

  const playlist  = usePlayStore.getState().playlist

  const keys = Object.keys(playlist);
  const currentIndex = keys.indexOf(currentIsrc)
  const nextKey = keys[currentIndex + 1]
  const nextSong = playlist[nextKey]
  console.log("next song", nextSong)
  play(nextKey, nextSong)
}

export default play