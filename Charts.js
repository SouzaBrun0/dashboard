import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Vendas",
      data: [3000, 5000, 4000, 6000, 7000, 8000],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const Charts = () => {
  return (
    <div>
      <h2>Gráficos</h2>
      <Line data={data} />
    </div>
  );
};

export default Charts;
