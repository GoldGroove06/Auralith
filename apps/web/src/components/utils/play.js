import {create} from 'zustand'

export const usePlayStore = create((set) => ({
    currentTrackData: null,
    setCurrentTrackData: (trackData) => set({ currentTrackData: trackData }),
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


const play = async(isrc, audioRef, trackData) => {
    const qobuzId = await getQobuzId(isrc);
    const streamUrl = await fetch(`https://qobuz.kennyy.com.br/api/download-music?track_id=${qobuzId}&quality=27`);
    const data = await streamUrl.json();
    usePlayStore.getState().setCurrentTrackData(trackData)
    audioRef.current.src = data.data.url;
    audioRef.current.play(); 
}

export default play