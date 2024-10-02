import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Calculate the distribution of people in different occupations
  //we define an empty object called occupations to store the distribution of people in different occupations
  const occupations = {};

  //We iterate over the data array and update the counts in the occupations object based on each person's occupation. If the occupations object already has a property for the occupation, we increment its count. Otherwise, we set the count to 1.
  data.forEach((person) => {
    const occupation = person.Occupation;
    if (occupations.hasOwnProperty(occupation)) {
      occupations[occupation]++;
    } else {
      occupations[occupation] = 1;
    }
  });

  // Prepare data for the pie chart
  //We extract the occupation labels from the keys of the occupations object using Object.keys(occupations), and we extract the corresponding count values using Object.values(occupations)
  const labels = Object.keys(occupations);
  const values = Object.values(occupations);

  const chartData = {
    labels, //An array of labels representing the occupations.
    datasets: [
      {
        data: values, //An array of counts corresponding to each occupation.
        backgroundColor: [
          //An array of background colors for each segment of the pie chart.
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#66BB6A",
          "#FF8A65",
          "#9575CD",
          "#4DD0E1",
        ],
      },
    ],
  };

  // Render the pie chart
  return (
    <div className="pie-chart-container">
      <h1>Pie Chart</h1>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
