import React, { useState, useEffect } from 'react'
import Progress from "@radui/ui/Progress";
import Button from "@radui/ui/Button";
import {usePlayStore} from '../utils/play.js'

const Player = ({ audioRef }) => {
    const [playerTimer, setPlayerTimer] = useState(0)
    const currentTrackData = usePlayStore((state) => state.currentTrackData)

    useEffect(() => {
        const audio = audioRef.current;

        const update = () => {
            setPlayerTimer(audio.currentTime);
        };

        audio.addEventListener(
            "timeupdate",
            update
        );

        return () => {
            audio.removeEventListener(
                "timeupdate",
                update
            );
        };
    }, []);

    const togglePlay = () => {
        if (audioRef.current.paused) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };

    return (
        <div>
            <h3>{currentTrackData?.title}</h3>
            <img
              src={currentTrackData?.artwork?.url}
              alt={currentTrackData?.album?.title}
              width={80}
            />
            {Math.floor(playerTimer)}
            <Progress.Root value={playerTimer} maxValue={audioRef.current?.duration || 100} minValue={0}>
                <Progress.Indicator />
            </Progress.Root>
            {audioRef.current?.duration}
             <h5>{currentTrackData?.album?.title}</h5>

            <p>{currentTrackData?.artist?.name}</p>
            <Button onClick={togglePlay}>{audioRef.current?.paused ? "Play" : "Pause"}</Button>
        </div>
    )
}

export default Player