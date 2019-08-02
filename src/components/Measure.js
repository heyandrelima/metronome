import React, { useState, useEffect } from 'react';

const Measure = (props) => {
    const { callback } = props;
    const [clicks, setClicks] = useState([]);
    const [bpm, setBpm] = useState(60);
    let zeroTimeout;

    const handleKey = event => {
        if (event.key === 'Control') {
            const time = new Date().valueOf();
            const newClicks = clicks;
            newClicks.push({ time });

            setClicks([...newClicks]);
            calculateBpm();
        }
    };

    const handleType = event => {
        const newBpm = parseInt(event.target.value);

        setBpm(newBpm);
        callback(newBpm);
    };

    const calculateBpm = () => {
        clearTimeout(zeroTimeout);

        const length = clicks.length;
        const difference = clicks[length - 1].time - clicks[0].time;
        const average = difference / length;
        const avgSeconds = 1000 / average;
        const newBpm = parseInt(60 * avgSeconds);

        setBpm(newBpm);
        callback(newBpm);

        zeroTimeout = setTimeout(() => {
            setClicks([]);
        }, 5000);
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKey, false);

        return () => {
            document.removeEventListener('keydown', handleKey, false);
        };
    }, []);

    return (
        <div>
            <h2>Type the BPM or tap CTRL to count it</h2>
            <input className="bpm-input" type="number" value={bpm} onChange={handleType} />
        </div>
    );
};

export default Measure;