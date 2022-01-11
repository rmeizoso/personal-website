import IntroText from './textFiles/WhatDoIDo.txt';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import HeaderPicture from './HeaderPicture.js'
import {getText,string2jsx} from '../util.js'

function WhatDoIDo(){
    const [text, setText] = useState('')

    useEffect(()=>{
        if(!text){
            getText(IntroText, setText)
        }
    })

    const topText = 'What Do I Do?'
    const parsedText = string2jsx(text)
    return(
        <div>
            
            {/* <Col xs={4}>
                <HeaderPicture/>
            </Col> */}
            
                <row className="App-header">{topText}</row>
                <p class="App-center">
                    {parsedText}
                </p>
 
            
            <hr/>
        </div>
        )
}

export default WhatDoIDo;