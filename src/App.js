import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import Gallery from './Components/Gallery';
import BookAppoitment from './Components/BookAppoitment';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


function App() {
  /*
  APP WILL JUST CONTAIN ROUTING AND NAVBAR TO LINK TO OTHER PAGES 

  */
  return (
    <div className="App">
      <>
        <Navbar bg="dark" expand="sm" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              TyDaBarber
            </Navbar.Brand>

            <Nav>
              <Nav.Link as={Link} to="/home">
                About Me
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link as={Link} to="/gallery">
                Photo Gallery
              </Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link as={Link} to="/BookAppoitment">
                Book An Appoitment
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>

      <div>
        <Routes>
          <Route path="/home" element={<AboutMe />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/BookAppoitment" element={<BookAppoitment/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
