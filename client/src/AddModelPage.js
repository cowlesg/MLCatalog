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
    const [datasetName, setDatasetName] = useState('');
    const [datetime, setDatetime] = useState('');
    const [modelMetric, setModelMetric] = useState('');
    const [modelPath, setModelPath] = useState('');
    const [trainingLoss, setTrainingLoss] = useState('');
    const [validationLoss, setValidationLoss] = useState('');
    const [notes, setNotes] = useState('');
    const [isFavorite, setIsFavorite] = useState(false);

    const crumbs = [
        {href: '/', icon: faHouse, content: ''},
        {href: '/new-model-run', icon: '', content: 'New Model'},
    ]

    const handleDatasetNameChange = (e)=> {
        setDatasetName(e.target.value);
    }
    const handleDatetimeChange = (e)=> {
        setDatetime(e);
    }
    const handleModelMetricChange = (e)=> {
        setModelMetric(e.target.value);
    }
    const handleModelPathChange = (e)=> {
        setModelPath(e.target.value);
    }
    const handleTrainingLossChange = (e)=> {
        setTrainingLoss(e.target.value);
    }
    const handleValidationLossChange = (e)=> {
        setValidationLoss(e.target.value);
    }
    const handleNotesChange = (e)=> {
        setNotes(e.target.value);
    }
    const handleIsFavoriteChange = (e)=> {
        setIsFavorite(e.target.value);
    }




    const datetimeProps = {required: true};
    
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const postData = {
            datasetName,
            datetime,
            modelMetric,
            modelPath,
            trainingLoss,
            validationLoss,
            notes,
            isFavorite
        };
    
        fetch('http://localhost:8000/new-entry/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData),
        })
        .then((res) => {
            if (!res.ok) {
                console.error('Network response was not ok');
            }
            else {
                console.log('Post created'); // Handle successful submission
            }
      
        });
        window.location.href="/";

    }
    return (
        
        <Container className="PageWithHeader">
            <Row className="Header" >
                    <Breadcrumbs crumbs = {crumbs} />
            </Row>
            <Form className="Body" onSubmit={handleSubmit}>
                <Form.Group className="FormRow mb-3" controlId="formDatasetName">
                    <Form.Label>Dataset Name</Form.Label>
                    <Form.Control required className="TextInput" type="textarea" placeholder="e.g. Mnist" onChange={handleDatasetNameChange}/>
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formDatetime">
                    <Form.Label>Datetime of Run</Form.Label>
                    <Datetime inputProps={datetimeProps} className="TextInput" onChange={handleDatetimeChange}/>
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formMetric">
                    <Form.Label>Model Metric</Form.Label>
                    <Form.Control required className="TextInput" type="textarea" placeholder="e.g. euclidean" onChange={handleModelMetricChange}/>
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formPath">
                    <Form.Label>Model Path </Form.Label>
                    <Form.Control required className="TextInput" type="textarea" placeholder="e.g. /path/to/model/on/disk" onChange={handleModelPathChange}/>
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formTrainingLoss">
                    <Form.Label>Training Loss </Form.Label>
                    <Form.Control required className="TextInput" type="textarea" onChange={handleTrainingLossChange}/>
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formValidationLoss">
                    <Form.Label>Validation Loss </Form.Label>
                    <Form.Control required className="TextInput" type="textarea" onChange={handleValidationLossChange}/>
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formNotes">
                    <Form.Label> Notes </Form.Label>
                    <Form.Control className="TextInput" type="textarea" onChange={handleNotesChange}/>
                </Form.Group>
                <Form.Group className="FormRow mb-3" controlId="formBasicCheckbox">
                    <Form.Label>Add To Favorites </Form.Label>
                    <Form.Check className="lg" type="checkbox" onChange={handleIsFavoriteChange}/>
                </Form.Group>
                <div className="FormRow">
                    <Button className="SaveButton" type="submit" >
                        Save
                    </Button>
                </div>
            </Form>
        </Container>
      );
  }
  
  export default AddModelPage

  