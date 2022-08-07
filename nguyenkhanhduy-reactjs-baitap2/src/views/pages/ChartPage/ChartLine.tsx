import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const labels = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

const options = {
    responsive: true,

    plugins: {
        legend: {
            display: true,
            position: 'bottom' as const,
        },
        title: {
            display: false,
            text: 'Doanh số bán hàng năm 2022',
        },
    },
};

const data = {
    labels,
    datasets: [
        {
            label: 'Bơ',
            data: [
                120, 430, 240, 750, 825, 435, 660, 850, 450, 520, 610, 552
            ],
            borderColor: '#0066ff',
            backgroundColor: '#0066ff',
        },
        {
            label: 'Sầu Riêng',
            data: [
                150, 230, 340, 550, 625, 535, 760, 350, 550, 220, 410, 252
            ],
            borderColor: '#f16600',
            backgroundColor: '#f16600',
        },
        {
            label: 'Ổi',
            data: [
                160, 330, 430, 250, 375, 225, 310, 210, 230, 320, 256, 332
            ],
            borderColor: '#00ff00',
            backgroundColor: '#00ff00',
        },
        {
            label: 'Nhãn',
            data: [
                230, 550, 325, 453, 145, 323, 513, 217, 324, 444, 276, 287
            ],
            borderColor: '#ff0066',
            backgroundColor: '#ff0066',
        },
    ],
};

function ChartLine() {
    return (
        <Line options={options} data={data}/>
    );
}

export default ChartLine;