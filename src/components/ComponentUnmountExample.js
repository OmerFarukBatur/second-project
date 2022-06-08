import {useState,useEffect} from 'react'

function ComponentUnmountExample() {

    const [number,setNumber] = useState(0);

    useEffect(() =>{
        console.log("Component mount edildi.");

        const interval = setInterval(() =>{
            setNumber((n) => n + 1);
        },1000);


        return () => clearInterval(interval);
    },[]);


    useEffect(() => {
        console.log("number state güncellendi.");
    },[number]);


  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

export default ComponentUnmountExample
