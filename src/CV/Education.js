import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Education(){
    
    const topText = 'Education'

    return (
        <div>
            
                <Row className="CV-headers">
                    <Col>
                        {topText}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to ={{pathname: 'https://en.wikipedia.org/wiki/Georgia_Tech'}} 
                              target='_blank'
                              className="CV-subsection-header">
                                  Georgia Institute of Technology
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col className="CV-center">M.S. Computer Science: Machine Learning</Col>
                    <Col className="CV-dates">December 2021</Col>
                </Row>
                <Row>
                    <Col className="CV-center">B.S. Mechanical Engineering, Highest Honors</Col>
                    <Col className="CV-dates">May 2020</Col>
                </Row>
            <hr/>
        </div>   
       );
}

export default Education;