import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [120, 150, 200, 156, 134, 164, 172, 143, 217, 178, 200, 210],
      backgroundColor: '#00ffff'
    },
    {
      label: 'Dataset 1',
      data: [231, 324, 134, 224, 323, 145, 423, 213, 312, 323, 123, 219],
      backgroundColor: '#66ff33'
    },
    {
      label: 'Dataset 1',
      data: [150, 234, 189, 210, 250, 174, 324, 245, 276, 167, 333, 241],
      backgroundColor: '#ffcc00'
    }

  ],
  
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: 'bottom' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
  
};

function ChartPageBar() {
  return (
    <Bar
      data={data}
      options={options}
    />
  );
}

export default ChartPageBar;