import {Col, Row, Container} from 'react-bootstrap';
import MLResearch from './ResearchAndProjects/MLResearch.js'
import Elbowroom from './Jobs/Elbowroom.js'
import GRITSLab from './ResearchAndProjects/GRITS'
function ResearchAndProjects(){
    const topText = 'Research & Projects Of Interest'

    return (
        <div>    
            <Col className='CV-headers'>{topText}</Col>
            <GRITSLab />
            <MLResearch />
            
            <hr/>
        </div>
       );
}

export default ResearchAndProjects;