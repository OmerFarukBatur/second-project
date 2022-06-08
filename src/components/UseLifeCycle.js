import {React, useState, useEffect} from 'react'

function UseLifeCycle() {
const [number,setNumber] = useState(0);
useEffect(() => {
  console.log("sistem güncellendi");
});

  return (
    <div>
      {number}
      <br></br>
      <button onClick={() => {
        setNumber(number + 1)
      }}>Click</button>
    </div>
  )
}

export default UseLifeCycle
