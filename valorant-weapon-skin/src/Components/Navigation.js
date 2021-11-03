import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/arsenal">
            <img
              src="https://media.valorant-api.com/sprays/0a6db78c-48b9-a32d-c47a-82be597584c1/fulltransparenticon.png"
              alt="logo"
              width="50px"
            />
          </Link>
          <span className=".d-none .d-lg-block">Valorant Weapon Skins</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item><Link to='/arsenal'>Home</Link></Nav.Item>
            <Nav.Item><Link to='/About'>About</Link></Nav.Item>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Weapon Name"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;