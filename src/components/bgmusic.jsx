//background music for the website
import React, {useState, useRef} from "react";
import music from "../assets/music/Dancing Elements.mp3";

//adding an icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';

export const Bgmusic = () => {
    const [isPlaying, setIsPlaying] = useState(true);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    }

    return (
        <div>
            <audio ref={audioRef} autoPlay loop>
                <source src={BgMusic} type="audio/mp3" />
            </audio>
            <FontAwesomeIcon icon={isPlaying ? faVolumeHigh : faVolumeXmark} onClick={toggleAudio} />
        </div>
    )  
}