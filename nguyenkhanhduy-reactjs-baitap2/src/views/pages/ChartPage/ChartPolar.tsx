import { PolarArea } from "react-chartjs-2";

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const data = {
    labels: ['Ổi', 'Chôm Chôm', 'Sầu Riêng', 'Mít', 'Mận', 'Bơ'],
    datasets: [
        {
            label: '# of Votes',
            data: [123, 143, 223, 165, 174, 180],
            backgroundColor: [
                '#009900',
                '#ff3300',
                '#ff6699',
                '#0099cc',
                '#00cc66',
                '#66ff99',
            ],
            borderWidth: 1,
        },
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
            text: 'Doanh số bán hàng năm 2022',
        },
    },
};



function ChartPolar() {
    return (
        <PolarArea data={data} options = {options}/>
    );
}

export default ChartPolar;