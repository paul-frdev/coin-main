"use client";

import React, { useEffect, useState } from "react";

export const useTimer = () => {
  const initialTime = 15 * 60;
  const [time, setTime] = useState(initialTime);
  const [formattedTime, setFormattedTime] = useState("");
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (running && time > 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running, time]);

  const resetTimer = () => {
    setTime(initialTime);
    setRunning(true);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return setFormattedTime(`${formattedMinutes}:${formattedSeconds}`);
  };

  useEffect(() => {
    formatTime(time);
  }, [time, formattedTime]);

  useEffect(() => {
    resetTimer();
  }, []);

  return {
    formattedTime,
  };
};
