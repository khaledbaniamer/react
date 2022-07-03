import Home from './components/home'
import { createContext , useState } from 'react';



export const Context = createContext();
export const counterContext = createContext();

function App() {

  const name = 'khaled';
  const [counter , setCounter] = useState(0);

  
  function updateCounter(){
    setCounter(counter+1);
  }
  function updateCounter1 (){
    setCounter(counter-1);
  }

  return (
    <div>
    <Context.Provider value={name}>
      <counterContext.Provider value={[counter , updateCounter , updateCounter1]}> 
      <Home />
      
      </counterContext.Provider>
    </Context.Provider>
    </div>

  );
}

export default App;

