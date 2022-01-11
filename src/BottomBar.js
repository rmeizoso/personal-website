import {Container, Col, Image, Navbar, Nav, Button} from 'react-bootstrap';
import {FaArrowCircleUp} from 'react-icons/fa';

import picture from './images/react-logo.png'
import firebase from './images/firebase.png'
import {useEffect, useState} from 'react'

function BottomBar(){

    const [renderElement, setRenderElement] = useState()

    useEffect(()=>{
        if(!renderElement){
            if(document.getElementById('body').clientHeight < window.screen.availHeight*.3){
                console.log(document.getElementById('body').clientHeight)
                setRenderElement(<Navbar fixed='bottom'  variant='dark' bg='black'  style={{paddingBottom: '0%'}}>
                                    <Container className="Nav-bar">
                                        <Col>
                                        <Navbar.Brand style={{fontSize: '15px'}}>Powered By <Image src={picture} class="photo"  alt="image" style={{'width':'35px',maxHeight:'auto'}}/>   
                                        <Image src={firebase} class="photo"  alt="image" style={{'width':'100px',maxHeight:'auto'}}/>
                                            </Navbar.Brand>
                                        </Col>
                                        <Navbar.Text style={{'textAlign':'right'}} onClick={()=>{window.scrollTo({top: 0, behavior:'smooth'})}}>
                                                Scroll To Top <FaArrowCircleUp style={{fontSize: '30px'}}/>
                                        </Navbar.Text> 
                                    </Container>
                                </Navbar>)
            }else{
                setRenderElement(<Navbar sticky='bottom'  variant='dark' bg='black'  style={{paddingBottom: '0%'}}>
                                    <Container className="Nav-bar">
                                        <Col>
                                        <Navbar.Brand style={{fontSize: '15px'}}>Powered By <Image src={picture} class="photo"  alt="image" style={{'width':'35px',maxHeight:'auto'}}/>   
                                        <Image src={firebase} class="photo"  alt="image" style={{'width':'100px',maxHeight:'auto'}}/>
                                            </Navbar.Brand>
                                        </Col>
                                        <Navbar.Text style={{'textAlign':'right'}} onClick={()=>{window.scrollTo({top: 0, behavior:'smooth'})}}>
                                                Scroll To Top <FaArrowCircleUp style={{fontSize: '30px'}}/>
                                        </Navbar.Text> 
                                    </Container>
                                </Navbar>)
            }
        }
    })
    if(renderElement){ return(renderElement)}
    return null
}

export default BottomBar;