
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  const [time, setTime]=useState(parseInt(0))
  console.log(typeof time)


 useEffect(()=>{
 let interval= setInterval(()=>setTime(time+1),1000)
 return()=>clearInterval(interval)
 },[time])

  return (
    <div>
        {/* Do not remove the main div */}

        <p>You have been on this page for {time} Seconds</p>
    </div>
  )
}

export default App
