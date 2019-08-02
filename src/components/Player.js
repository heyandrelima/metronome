import React from 'react';

const Player = (props) => {
    const { bpm } = props;

    return (
        <div>
            <h2>Player</h2>
            <p>{bpm}</p>
        </div>
    );
};

export default Player;