import { useState } from "react";
import { Eventes } from "./components/Eventes";
import { Mileau } from "./components/Mileau";
import { Rendiveua } from "./components/Rendiveua";
import { persones } from "./Data";
function App() {
  const[state,setstate]=useState(persones)
  const clear=()=>{
    setstate([])
  }
  const view=()=>{
    setstate(persones)
  }
  return (
    <div className="container">
      <Rendiveua personesz={state}/>
      <Mileau persones={state}/>
      <Eventes viewdata={view} cleardata={clear}/>
    </div>
  );
}

export default App;
