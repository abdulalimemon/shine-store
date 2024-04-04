"use client";
import {useEffect, useState} from 'react';

const CountdownTimer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);

  const deadline = "April, 15,2024";

  const getTime = ()=> {
    const time= Date.parse(deadline)- Date.now();
    setDays(Math.floor(time/(1000*60*60*24)));
    setHours(Math.floor(time/(1000*60*60)%24));
    setMinutes(Math.floor((time/1000/60)%60));
    setSecond(Math.floor((time/1000)%60));
  }

  useEffect(() => {
    const interval = setInterval(()=> getTime(),1000);
    return ()=> clearInterval(interval);
  }, []);
  return (
    <>
      <div className='flex gap-3'>
        <div className='border py-2 px-3 rounded-md'>
          <h2 className='text-lg font-bold text-center'>{days < 10 ? "0" + days : days}</h2>
          <p className='text-base font-bold text-center'>Days</p>
        </div>
        <div className='border py-2 px-3 rounded-md'>
          <h2 className='text-lg font-bold text-center'>{hours < 10 ? "0" + hours : hours}</h2>
          <p className='text-base font-bold text-center'>Hours</p>
        </div>
        <div className='border py-2 px-3 rounded-md'>
          <h2 className='text-lg font-bold text-center'>{minutes < 10 ? "0" + minutes : minutes}</h2>
          <p className='text-base font-bold text-center'>Mins</p>
        </div>
        <div className='border py-2 px-3 rounded-md'>
          <h2 className='text-lg font-bold text-center'>{second < 10 ? "0" + second : second}</h2>
          <p className='text-base font-bold text-center'>Secs</p>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
