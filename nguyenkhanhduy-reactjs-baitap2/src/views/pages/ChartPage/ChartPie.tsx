import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
    labels: ['Ổi', 'Sầu Riêng', 'Mít', 'Xoài', 'Bơ', 'Chôm Chôm'],
    datasets: [
        {
            label: '# of Votes',
            data: [150, 90, 94, 88, 102, 87],
            backgroundColor: [
                '#00e600',
                '#ffff00',
                '#ff6600',
                '#990099',
                '#3366ff',
                '#00ffff',
            ],
            
            borderWidth: 1,
        },
    ],
};


function ChartPie() {
    return ( 
        <Pie data={data} />
     );
}

export default ChartPie;