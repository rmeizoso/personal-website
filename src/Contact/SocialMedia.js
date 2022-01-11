import {SiLinkedin} from 'react-icons/si'
import {Row, Col} from 'react-bootstrap'
function SocialMedia(){

    return  <Row>
    <Col className='CV-subsection-header' xs={4}>Social Media:</Col>
    <Col className='Contact-info' style={{textAlign:'left',fontSize:'20px', verticalAlign:'top'}}><SiLinkedin onClick={()=>{window.open('https://www.linkedin.com/in/ricardo-meizoso-42885314a/')}}/></Col>
</Row>
}

export default SocialMedia;