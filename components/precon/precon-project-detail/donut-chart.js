import React from "react";
import { Doughnut } from "react-chartjs-2";

const options = {
  legend: {
    display: false,
    position: "bottom"
  },
  elements: {
    arc: {
      borderWidth: 0
    }
  }
};

const data = {
  maintainAspectRatio: false,
  responsive: false,
  labels: ["a", "b", "c", "d"],
  datasets: [
    {
      data: [0, 0, 0, 100],
      backgroundColor: "#fc7715",
      hoverBackgroundColor: "#fc7715",
    }
  ]
};

function DonutCharts() {
  return (
        <Doughnut data={data} options={options} />
  );
}

export default DonutCharts;