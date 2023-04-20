import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const hour = time.getHours() % 12 || 12;
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return (
    <div className="clock">
      <div className="hour-hand" style={{ transform: `rotate(${(hour * 30) + (minute / 2)}deg)` }} />
      <div className="minute-hand" style={{ transform: `rotate(${(minute * 6) + (second / 10)}deg)` }} />
      <div className="second-hand" style={{ transform: `rotate(${second * 6}deg)` }} />
      <div className="number number1">1</div>
      <div className="number number2">2</div>
      <div className="number number3">3</div>
      <div className="number number4">4</div>
      <div className="number number5">5</div>
      <div className="number number6">6</div>
      <div className="number number7">7</div>
      <div className="number number8">8</div>
      <div className="number number9">9</div>
      <div className="number number10">10</div>
      <div className="number number11">11</div>
      <div className="number number12">12</div>
    </div>
  );
};

export default Clock;
