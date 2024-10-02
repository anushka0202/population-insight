import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Papa from "papaparse";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Histogram from "./components/Histogram";
import PieChart from "./components/PieChart";
import PopulationTable from "./components/PopulationTable";
import FamilyTree from "./components/FamilyTree";
//import data from "./data";

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [data, setData] = useState([]);

  //to fetch and parse the CSV data using the PapaParse library.
  async function GetData() {
    const Tempdata = Papa.parse(await fetchCsv()); //We use Papa.parse to parse the fetched CSV data.

    var dataObj = [];

    //We iterate over the parsed data to create individual person objects and store them in the dataObj array.
    for (var i = 1; i < Tempdata.data.length; i++) {
      var ID = Tempdata.data[i][0];
      var Name = Tempdata.data[i][1];
      var Age = Tempdata.data[i][2];
      var Occupation = Tempdata.data[i][3];
      var newPerson = { ID, Name, Age, Occupation };
      newPerson["Father's ID"] = Tempdata.data[i][4];
      dataObj = [...dataObj, newPerson];
    }

    setData(dataObj);
    return Tempdata;
  }

  //to fetch the CSV file.
  async function fetchCsv() {
    const response = await fetch("newData.csv"); //We use the fetch API to get the CSV file.
    const reader = response.body.getReader(); //We read the response body as a stream using the reader.
    const result = await reader.read();
    const decoder = new TextDecoder("utf-8"); //We decode the stream using a TextDecoder and store the decoded CSV data.
    const csv = await decoder.decode(result.value);

    return csv;
  }

  //to call GetData when the component mounts
  useEffect(() => {
    GetData();
  });

  //updates the selectedPerson state variable when a row is selected in the PopulationTable component.
  const handleRowSelect = (person) => {
    setSelectedPerson(person);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Home />
              </div>
            }
          />
          <Route
            path="/histogram"
            element={
              <div className="container">
                <Histogram data={data} className="grid-item" />
              </div>
            }
          />
          <Route
            path="/piechart"
            element={
              <div className="container">
                <PieChart data={data} className="grid-item" />
              </div>
            }
          />
          <Route
            path="/familytree"
            element={
              <div className="container">
                <PopulationTable
                  data={data}
                  onSelectRow={handleRowSelect}
                  className="grid-item"
                />
                <FamilyTree
                  selectedPerson={selectedPerson}
                  data={data}
                  className="grid-item"
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
