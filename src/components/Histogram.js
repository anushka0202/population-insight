import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale, //y
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const Histogram = ({ data }) => {
  // Calculate the number of people falling into each age range
  const ageRanges = [
    { label: "0-5 Years", count: 0 },
    { label: "5-12 Years", count: 0 },
    { label: "13-21 Years", count: 0 },
    { label: "22-29 Years", count: 0 },
    { label: "30-50 Years", count: 0 },
    { label: "Greater than 50 years", count: 0 },
  ];

  //We iterate over the data array, which contains the information of all the people, and update the count property of each ageRanges element based on the person's age.
  data.forEach((person) => {
    const age = person.Age;
    if (age >= 0 && age <= 5) {
      ageRanges[0].count++;
    } else if (age >= 6 && age <= 12) {
      ageRanges[1].count++;
    } else if (age >= 13 && age <= 21) {
      ageRanges[2].count++;
    } else if (age >= 22 && age <= 29) {
      ageRanges[3].count++;
    } else if (age >= 30 && age <= 50) {
      ageRanges[4].count++;
    } else {
      ageRanges[5].count++;
    }
  });

  // Prepare data for the bar chart
  const chartData = {
    labels: ageRanges.map((range) => range.label), //An array of labels representing the age ranges
    datasets: [
      {
        label: "Number of People",
        data: ageRanges.map((range) => range.count), //An array of counts corresponding to each age range
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Render the bar chart
  return (
    <div className="histogram-container">
      <h1>Histogram</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default Histogram;
