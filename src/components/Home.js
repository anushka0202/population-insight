import React from "react";

const Home = () => {
  return (
    <div>
      <div className="home">
        <h1>Population Insight</h1>
        <ol className="list">
          <li className="item">
            <span>
              This application can generate insight from a given data of people
              with the following information: Id, Name, Age, Occupation,
              Father's ID.
            </span>
          </li>
          <br />
          <li className="item">
            <h2>Histogram</h2>
            <span>
              Shows the number of people falling in the range of following sets:
              0-5 years, 5-12 years, 13-21 years, 22-29 years, 30-50 years, and
              greater than 50 years.
            </span>
          </li>
          <br />
          <li className="item">
            <h2>Pie-chart</h2>
            <span>
              Depicts the distribution of people in different occupations in the
              given set.
            </span>
          </li>
          <br />
          <li className="item">
            <h2>Population Table and Family Tree</h2>
            <span>
              Shows a simple list of all people. On selection of a row in the
              Population Table, one should be able to see the family tree. The
              family tree always starts with the topmost root of that family and
              highlights the person selected.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
