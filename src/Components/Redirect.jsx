import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const Navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  useEffect(() => {
    // Set a 5-second delay before redirecting
    const delay = 5000; // 5 seconds in milliseconds

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const timeoutId = setTimeout(() => {
      // Redirect to another page using the history object
      clearInterval(intervalId);
      Navigate('/')
    }, delay);

    // Cleanup the timeout to prevent memory leaks
    return () => {
      console.log("I am here!!")
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <header className="text-black bg-slate-200 p-2">
      Thank you. In {countdown} seconds, bot will exit
    </header>
  );
}

export default Redirect