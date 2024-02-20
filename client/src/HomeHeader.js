import React, { useState } from "react";
import { Container, Button } from 'react-bootstrap';
import "./HomeHeader.css";
import logo from "./images/minedxai-logo.png"


function Header() {
    const [show, setShow] = useState(false);
  
    const handleClose = ()=> setShow(false);
    const handleShow = () => setShow(true);
    

    return (
        <Container className="HomeHeader" >
            <img className="Logo" src={logo} alt="minedxai logo"/>                
            <Button onClick={(e) => {
              e.preventDefault();
              window.location.href="new-model-run";
            }} className="CreateButton"
            > Add Model </Button>

        </Container>
      );
  }
  
  export default Header