import { createRoot } from 'react-dom/client';
import Clazz from "./Class"
import Smily from "../res/smily.png"
import React, { useState } from "react"

console.log(Clazz.getCrap())

interface RootArgs{
    time : number
}

function Root(){

    // const [state, update] = useState({time:0})    
    return <div>
        {/* <p>{state.time}</p> */}
        <img src={Smily} alt="A yellow smily face" title='A yellow smily face' />
    </div>
}


const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(Root());
new Clazz().sidekickFunc()

