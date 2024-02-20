import React, { useState, useEffect } from "react";
import "./App.css";
import HomeHeader from "./HomeHeader";
import GridEntry from "./ModelGrid";

function App() {
  const [gridEntries, setGridEntries] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/")
    .then((response) => { 
      return response.json()
      .then((data) => {
          console.log(data);
          setGridEntries(data.map((row) => <GridEntry rowData={row}/>));

        });
      })
      .catch((err) => {
        console.log(err);
      });
    },[]) 

  return (
    <div className="App">
      <HomeHeader/>
      <div className="Body">
        {gridEntries} 
      </div>

    </div>
  );
}

export default App