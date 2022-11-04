import { useState } from "react";
import "./pokemonnavbar.css";
import "bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa";

const Pokemonnavbar = () => {
  
  return [false].map((expand) => (
    <Navbar collapseOnSelect expand="lg" id="bars" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/Home" className="d-inline-block">
          <img
            src="https://i.imgur.com/sSyKKMJ.png"
            width="300rem"
            height="200rem"
            className="d-inline-block align-top"
            alt=" logo"
            as={Link}
            to="/Home"
          />
        </Navbar.Brand>
      </Container>
      <Container id="box">
        
      <Nav.Link as={Link} to="/Search">
       <FaSearch class="searchicon"/>
      </Nav.Link>
       

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" />
        <Nav className="me-auto">
                      
          <Dropdown>
            <Dropdown.Toggle  id="dropdown-basic" style={{color:"#FAD02C",backgroundColor:"#333652",borderStyle:"none",padding:"8px",fontSize:"x-large"}}>
              UTILITY
            </Dropdown.Toggle>
            <Dropdown.Menu style={{backgroundColor:"#333652",fontSize:"x-large"}}>
              <Dropdown.Item id="dropone" as={Link} to="/Pokedex">
                POKEDEX
              </Dropdown.Item>
              <Dropdown.Item id="dropone" as={Link} to="/Typematch">
                TYPE BATTLER
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Nav.Link style={{color:"#fad02c"}}id="linkone" as={Link} to="/news">
            NEWS
          </Nav.Link>

          <Nav.Link style={{color:"#fad02c"}}id="linkone" as={Link} to="/Discussion">
            COMMUNITY
          </Nav.Link>
          <Nav.Link style={{color:"#fad02c"}}id="linkone" as={Link} to="/">
            WIKI
          </Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
  ));
};

export default Pokemonnavbar;
