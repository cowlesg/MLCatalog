import React, { useState  } from "react";
import Container from 'react-bootstrap/Container';
import Breadcrumbs from './Breadcrumbs';
import "./AddModelPage.css";
import { faHouse }  from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";



function AddModelPage() {
    const [show, setShow] = useState(false);
  
    const handleClose = ()=> setShow(false);
    const handleShow = () => setShow(true);
    const crumbs = [
        {href: '/', icon: faHouse, content: ''},
        {href: '/new-model-run', icon: '', content: 'New Model'},
    ]
    

    return (
        
        <Container className="PageWithHeader">
            <Row className="Header" >
                    <Breadcrumbs crumbs = {crumbs} />
            </Row>
            <Form className="Body">
                <Form.Group className="FormRow mb-3" controlId="formDatasetName">
                    <Form.Label>Dataset Name</Form.Label>
                    <Form.Control className="TextInput" type="textarea" placeholder="e.g. Mnist" />
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formDatetime">
                    <Form.Label>Datetime of Run</Form.Label>
                    <Datetime className="TextInput" />
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formMetric">
                    <Form.Label>Model Metric</Form.Label>
                    <Form.Control className="TextInput" type="textarea" placeholder="e.g. euclidean" />
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formPath">
                    <Form.Label>Model Path </Form.Label>
                    <Form.Control className="TextInput" type="textarea" placeholder="e.g. /path/to/model/on/disk" />
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formTrainingLoss">
                    <Form.Label>Training Loss </Form.Label>
                    <Form.Control className="TextInput" type="textarea" />
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formValidationLoss">
                    <Form.Label>Validation Loss </Form.Label>
                    <Form.Control className="TextInput" type="textarea" />
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formValidationLoss">
                    <Form.Label> Notes </Form.Label>
                    <Form.Control className="TextInput" type="textarea" />
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Add To Favorites </Form.Label>
                    <Form.Check className="lg" type="checkbox" />
                </Form.Group>
                <div className="FormRow">
                    <Button className="SaveButton" type="submit">
                        Save
                    </Button>
                </div>
            </Form>
        </Container>
      );
  }
  
  export default AddModelPage

  