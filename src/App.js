import './App.css';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './HomePage/HomePage.js'
import NavBar from './NavBar.js'
import BottomBar from './BottomBar.js'
import {Route, Switch} from 'react-router-dom'
import CV from './CV/CV.js'
import MainProjects from './Projects/MainProjects.js'
import ContactMain from './Contact/ContactMain.js'

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path= "/" exact><HomePage/></Route>
        <Route path= "/CV" exact><CV/></Route>
        <Route path= "/Projects" exact><MainProjects/></Route>
        <Route path="/Contact" exact><ContactMain/></Route>
      </Switch>
      <BottomBar />
    </div>
  );
}


export default App;
