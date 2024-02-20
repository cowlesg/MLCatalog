import React from "react";
import "./ModelGrid.css";

const GridEntry = ({ rowData }) => {
    return (

        <box className="GridEntry">
            <p>Dataset Name: {rowData.datasetname}</p>
            <p>Run Date/Time: {rowData.rundatetime}</p>
            <p>Model Metric: {rowData.modelmetric}</p>
            <p>Model Path: {rowData.modelpath}</p>
            <p>Training Loss: {rowData.trainingloss}</p>
            <p>Validation Loss: {rowData.validationloss}</p>
            <p>Notes: {rowData.notes}</p>
            
        </box>
    );
};






export default GridEntry