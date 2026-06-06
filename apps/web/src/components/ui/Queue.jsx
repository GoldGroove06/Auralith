import { usePlayStore } from "../utils/play"

function Queue() {
    const currentTrackData = usePlayStore((state) => state.currentTrackData)
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
            <div>

            </div>
        </div>
    )
}

export default Queue