import hobbies from './textFiles/hobbies.txt';
import {useState, useEffect} from 'react';
import HeaderPicture from './HeaderPicture.js'
import {getText, string2jsx} from '../util.js'

function Hobbies(){
    const [text, setText] = useState('')

    useEffect(()=>{
        if(!text){
            getText(hobbies, setText)
        }
    })
   
    const topText = '...And For Fun?'

    return(
        <div>  
            <p className="App-header">{topText}</p>
            <p className="App-center">{string2jsx(text)}</p>   
            <hr/>
        </div>
        )
}

export default Hobbies;