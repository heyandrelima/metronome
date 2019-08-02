import React, { useState, useEffect } from 'react';

const Measure = (props) => {
    const { callback } = props;
    const [ clicks, setClicks ] = useState([]);

    const handleKey = event => {
        const time = new Date().valueOf();
        const newClicks = clicks;
        newClicks.push({ time });

        setClicks([...newClicks]);
        calculateBpm();
    };

    const calculateBpm = () => {
        const length = clicks.length;
        const difference = clicks[length - 1].time - clicks[0].time;
        const average = difference / length;
        const avgSeconds = 1000 / average;
        const bpm = 60 * avgSeconds;
        
        callback(bpm);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKey, false);

        return () => {
            document.removeEventListener('keydown', handleKey, false);
        };
    }, []);

    return (
        <div>
            <h2>Measure</h2>
        </div>
    );
};

export default Measure;