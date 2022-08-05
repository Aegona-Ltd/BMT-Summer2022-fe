import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Chôm chôm', 'Nhãn', 'Bơ', 'Ổi', 'Mận', 'Lê'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                '#00ff00',
                '#0099ff',
                '#ffcc00',
                '#ff0066',
                '#00ff99',
                '#0000ff',
            ],
            borderColor: [
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
                '#fff',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'right' as const,
        },
        title: {
            display: false,
            text: 'Doanh số bán hàng năm 2022',
        },
        tooltip: {
            titleColor: "#fff"
        }
    },
};

function ChartDoughnut() {
    return (
        <Doughnut
            data={data}
            width={500}
            height={500}
            options = {options}
        />
    );
}

export default ChartDoughnut;