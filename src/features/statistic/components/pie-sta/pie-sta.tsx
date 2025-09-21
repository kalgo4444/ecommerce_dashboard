import { memo } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Qalam", "Daftar", "Cola", "Pepsi", "Qog'oz", "Sigaret"],
  datasets: [
    {
      label: "Most Popular Item now",
      data: [12, 19, 34, 28, 10, 21],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(250, 91, 63, 0.2)",
        "rgba(47, 105, 253, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderWidth: 0,
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

const PieSta = () => {
  return <Pie data={data} />;
};

export default memo(PieSta);
