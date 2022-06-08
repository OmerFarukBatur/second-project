import {React, useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    const increase = ()=>{
        setCount( 1)
    };

    const decrease = ()=>{
        setCount(count - 1)
    };

  return (      
    <div>
      <h1>Counter</h1>
      <br></br>
      <h1>{count}</h1>
      <br></br>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default Counter
