import { useEffect, useState } from "react";


const useGenerateTimer = () => {
  const [seconds, setSeconds] = useState(Math.floor( Math.random() * 4 + 1 ) * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds( prevSeconds => {
        const newSeconds = prevSeconds - 1;
        if( newSeconds <= 0 ) {
          clearInterval(interval);
          return 0;
        }
        return newSeconds;
      });
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return { seconds }
}

export default useGenerateTimer
