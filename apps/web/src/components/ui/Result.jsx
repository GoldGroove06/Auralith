import Button from '@radui/ui/Button';
import ContextMenu from '@radui/ui/ContextMenu';
import { usePlayStore } from '../utils/play';
import play from '../utils/play';

function Result({ results, playSong}) {
  const queue = usePlayStore((state) => state.queue)
  const addToQueue  = usePlayStore((state) => state.addToQueue)
  console.log(queue)

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "5rem",
    }} className='overflow-y-auto'>
      {results.map((track) => {
        const trackDuration = { minutes: track.duration.split("PT")[1].split("M")[0], seconds: track.duration.split("PT")[1].split("M")[1].split("S")[0] }
        // console.log(track)
        return (
          <ContextMenu.Root>
            <ContextMenu.Trigger className='border-none'>


              <button onClick={() => { play(track.isrc, track) }}>
                <div key={track.id}>
                  <img
                    src={track.artwork?.url}
                    alt={track.album.title}
                    width={200}
                  />
                  {track.explicit && <p>E</p>}
                  <h3>{track.title}</h3>
                  <p>{trackDuration.minutes}:{trackDuration.seconds}</p>
                  <h5>{track.album.title}</h5>

                  <p>{track.artist.name}</p>
                </div>
              </button>
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
              <ContextMenu.Content >
                <Button onClick={() => addToQueue(track) } >Play Next</Button>
              </ContextMenu.Content>
            </ContextMenu.Portal>
          </ContextMenu.Root>
        );

      })}
    </div>
  );
}

export default Result;