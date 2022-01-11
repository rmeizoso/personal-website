import {Col, Row, Container} from 'react-bootstrap';
import Goldman2021 from './Jobs/Goldman2021.js'
import Goldman2020 from './Jobs/Goldman2020.js'
import GTA3630 from './Jobs/GTA3630.js'
import Elbowroom from './Jobs/Elbowroom.js'

function WorkExperience(){
    const topText = 'Work Experience'

    function getRenderElement(){
       
    }
    return (
        <div>
                
        <Col className='CV-headers'>{topText}</Col>
        <GTA3630 />
        <Goldman2021 />
        <Goldman2020 />
        <Elbowroom />
        <hr/>
        </div>
       );
}

export default WorkExperience;