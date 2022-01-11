import {Col, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function Jobheader(props){
    const {workplace, dates, jobtitle, location, link} = props;
    console.log(link)
    return (<div>
                <Row>
                    <Col>
                      <Link to={{pathname: link}} target="_blank" className="CV-workplace-header">{workplace}</Link> 
                    </Col>
                    <Col className="CV-dates">
                        {dates}
                    </Col>
                </Row>
                <Row>
                    <Col className="CV-center" style={{'fontStyle': 'italic'}}>{jobtitle}</Col>
                    <Col className="CV-dates">
                        {location}
                    </Col>
                </Row>
            </div>
       );
}

export default Jobheader;