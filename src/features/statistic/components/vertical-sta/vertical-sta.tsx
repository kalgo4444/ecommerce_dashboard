import { memo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const data = {
  labels,
  datasets: [
    {
      label: "Users",
      data: [20, 30, 40, 34, 24, 54, 41],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Purchase",
      data: [10, 20, 30, 10, 20, 30, 10],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const VerticalSta = () => {
  return <Bar options={options} data={data} />;
};

export default memo(VerticalSta);
