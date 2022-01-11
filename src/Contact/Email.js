import {Row, Col} from 'react-bootstrap';

function EmailInfo(){
    return <div>
        
                <Row>
                    <Col className='CV-subsection-header' xs={2}>Email:</Col>
                    <Col className='Contact-info' style={{textAlign:'left'}}>{'rmeizoso <at> gatech <dot> edu'}</Col>
                </Row>
                <Row>
                    <Col className='CV-subsection-header' xs={5}>Phone Number:</Col>
                    <Col className='Contact-info' style={{textAlign:'left'}}>{'+1-(787)-242-5597'}</Col>
                </Row>  
                <hr/> 
            </div>
}

export default EmailInfo;