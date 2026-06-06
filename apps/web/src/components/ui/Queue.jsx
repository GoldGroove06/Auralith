import { usePlayStore } from "../utils/play"

function Queue() {
    const currentTrackData = usePlayStore((state) => state.currentTrackData)
    const queue = usePlayStore((state) => state.queue)
    console.log(currentTrackData)
    return (    
        <div className="flex flex-row align-center items-center">
            <div>
                <img
                        src={currentTrackData?.artwork?.url}
                        alt={currentTrackData?.album?.title}
                        width={300}
                    />
            </div>
            {/* {queue } */}
        </div>
    )
}

export default Queue