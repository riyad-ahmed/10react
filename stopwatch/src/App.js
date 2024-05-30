import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }else{
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    }
  } , [running]);

  return (
    <div className='flex flex-col items-center justify-center py-8'>
      <h1 className='text-2xl font-semibold pb-2'>Stopwatch</h1>
      <div className='text-xl font-semibold'>
        <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
        <span>{("0"+ ((time / 10) % 100))}</span>
      </div>
      <div className='flex gap-6 pt-6'>
        <button onClick={()=>{setRunning(true)}} className="border-2 rounded-lg px-2">Start</button>
        <button onClick={()=>{setRunning(false)}} className="border-2 rounded-lg px-2">Stop</button>
        <button onClick={()=>{setTime(0)}} className="border-2 rounded-lg px-2">Reset</button>
      </div>
    </div>
  );
}

export default App;
