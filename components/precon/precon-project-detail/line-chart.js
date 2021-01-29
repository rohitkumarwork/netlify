import React from "react";
import { Line } from "react-chartjs-2";

const options = {
    legend: {
        position: "bottom",
        title: {
            fontColor: "red"
        }
    },
    scales: {
        xAxes: [{
            lineThickness: 0,
            tickLength: 0,
            gridThickness: 0,
            gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
            scaleLabel: {
                fontSize: 12
            },
            ticks: {
                  fontColor: "aqua",
                  fontSize: 12
            }
        }],
        yAxes: [{
            gridLines: {
                color: "#eef8ff"
            },
            scaleLabel: {
                fontSize: 12
            },
            ticks: {
                fontColor: "#bac2ff",
                fontSize: 12
            }
        }]
    }
} 

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "First dataset",
      data: [20, 35, 25, 45, 43, 15, 23, 20, 5, 10, 20, 9 ],
      fill: false,
      borderColor: "red",
      pointRadius: 5,
      borderCapStyle: 'butt',
      lineTension: 0.1,
      pointBackgroundColor: '#fff',
    },
    {
      label: "Second dataset",
      data: [33, 23, 31, 25, 61, 26, 20, 35, 25, 45, 43, 15, 23],
      fill: false,
      borderColor: "aqua",
      pointRadius: 5,
      borderCapStyle: 'butt',
      lineTension: 0.1,
      pointBackgroundColor: '#fff',
    }
  ]
};

export default function LineCharts() {
  return (
      <Line data={data} options={options} />
  );
}
