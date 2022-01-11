import {Container, Row, Col} from  'react-bootstrap';
// import context from 'react-bootstrap/esm/AccordionContext';
import logo from './logo.svg';
import './App.css'


function Infrastructure(props){
    return (
      <Container className='Infrastructure' id= 'body'>
        {props.renderElement}
      </Container>
    )
}

export default Infrastructure;