import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


function ItemAnalitics({balance, income, expense, state}) {

  const {month} = state
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Analitics',
    },
  },
};

const labels = ['Balance'];

const data = {
  labels,
  datasets: [
    {
      label: `Ingresos`,
      data:[income] ,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: '#70c575',
    },
    {
      label: `Gastos`,
      data:[expense] ,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: '#e26261',
    },
  ],
};

    return ( 
        <div className='d-flex p-2 col-12 w-100 bg-light '>
           <Bar data={data} options={options} />
        </div>
     );
}

export {ItemAnalitics};