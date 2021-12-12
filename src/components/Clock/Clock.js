import {useState, useRef, useEffect} from 'react';

const Clock = () => {

  const [time, setTime] = useState(null);
  const intervalRef = useRef(null);
  
  useEffect(() => {
  
    intervalRef.current = setInterval(() => {
      const now = new Date();
      const date = `0${now.getDate()}`.slice(-2);
      const month = `0${now.getMonth() + 1}`.slice(-2);
      const year = `0${now.getFullYear()}`.slice(-2);
      const hours = `0${now.getHours()}`.slice(-2);
      const minutes = `0${now.getMinutes()}`.slice(-2);
      const seconds = `0${now.getSeconds()}`.slice(-2);
      const timeString = `${date}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
      
      setTime(timeString);
    }, 1000);
  
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <p>{time}</p>
  );
}

export default Clock;
