import IntroText from './textFiles/Intro.txt';
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import HeaderPicture from './HeaderPicture.js'
import {getText, string2jsx} from '../util.js'

function Intro(){
    const [text, setText] = useState('')

    useEffect(()=>{
        if(!text){
            getText(IntroText, setText)
        }
    })
    console.log(text)
    const topText = 'Hi there!'

    return(
        <div>  
            <HeaderPicture/>                
            <p className="App-header">{topText}</p>
            <p className="App-center">{string2jsx(text)}</p>   
            <hr/>
        </div>
        )
}

export default Intro;