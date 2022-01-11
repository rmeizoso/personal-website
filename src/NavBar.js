import {Container, Col, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function NavBar(){
    

    function getMenu(){
        console.log('width:  '+ console.log(window.screen.width))

        if(window.screen.width < 600){
            console.log('width:  '+ (window.screen.availWidth))
            return (<div>
                 <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
                <Nav>
                    <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Menu"
                    menuVariant="dark"
                    align='end'
                    >
                        <NavDropdown.Item href="/">Home</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/CV">CV</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/Projects">Projects</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="Contact">Contact</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>

            </div>)

        }
        return <Nav style={{'textAlign':'right'}}>
        <Nav.Link href="/"  id='Home'>Home</Nav.Link> 
        <Nav.Link href ="/CV"  id='CV'>CV</Nav.Link>
        <Nav.Link href= "/Projects">Projects</Nav.Link>
        <Nav.Link href="/Contact" id='Contact'>Contact</Nav.Link> 
        </Nav>


    }
    return(
        <Navbar sticky='top' variant='dark' bg='black'  style={{paddingTop: '0%'}}>

            <Container className="Nav-bar" >

                <Col>
                   <Navbar.Brand>Ricardo J. Meizoso</Navbar.Brand>
                </Col>
                {getMenu()}
            </Container>
        </Navbar>
    )
}

export default NavBar;