import React from "react";

const PopulationTable = ({ data, onSelectRow }) => {
  return (
    <div className="population-table-container">
      <h1>Population Table</h1>
      <table>
        {/* header row containing the column names */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
            <th>Father's ID</th>
          </tr>
        </thead>
        {/* we map over the data array and render a row for each person. Each row
        has a click event handler that calls the onSelectRow function with the
        selected person as an argument. */}
        <tbody>
          {data.map((person) => (
            <tr key={person.ID} onClick={() => onSelectRow(person)}>
              <td>{person.ID}</td>
              <td>{person.Name}</td>
              <td>{person.Age}</td>
              <td>{person.Occupation}</td>
              <td>{person["Father's ID"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PopulationTable;
