import React from 'react'
import { Nav,Navbar,Container,FormControl,Button,Form,NavDropdown } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><b>BIKAYI </b></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2"><i className='fas fa-user'></i>Sign-in</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="PRIZE" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Category</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Year</NavDropdown.Item>
          <NavDropdown.Divider />
          
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
    )
}

export default Header
