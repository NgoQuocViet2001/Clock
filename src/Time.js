import React, { useState, useEffect } from "react";

function Time() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setDate(new Date());
    }

    return (
        <div className="time">
            <h2>It is {date.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Time;
