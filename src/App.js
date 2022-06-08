import './App.css';
import { useState } from 'react';
/* import Counter from './components/Counter' */
/* import InputExample from './components/InputExample' */
/* import UseLifeCycle from './components/UseLifeCycle' */
import ComponentUnmountExample from './components/ComponentUnmountExample'

function App() {

const[isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <InputExample/> */}
      {/* <UseLifeCycle/> */}

      {isVisible && <ComponentUnmountExample/>}

<br></br>
<button onClick={() => setIsVisible(!isVisible)}>Toggle Component </button>
    </div>
  );
}

export default App;
