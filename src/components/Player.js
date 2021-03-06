import React, { useState } from 'react';
const audioUrl = require('../assets/click.wav');

const Player = (props) => {
    const bpm = props.bpm || 60;
    const [playing, setPlaying] = useState(false);
    const audio = new Audio(audioUrl);

    const [playInterval, setPlayInterval] = useState();

    const handlePlay = () => {
        setPlaying(true);

        const intervalFreq = 60 * 1000 / bpm;
        
        setPlayInterval(setInterval(() => {
            audio.currentTime = 0;
            audio.play();
        }, intervalFreq));
    };

    const handlePause = () => {
        setPlaying(false);
        clearInterval(playInterval);
        setPlayInterval();
        audio.pause();
    };

    return (
        <div>
            <p>{bpm} bpm</p>
            {playing ? <button className="pause-button" onClick={handlePause}>Pause</button>
                : <button className="play-button" onClick={handlePlay}>Play</button>
            }
        </div>
    );
};

export default Player;