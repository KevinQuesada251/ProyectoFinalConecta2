import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { GetUsuarios } from '../services/UsersServices';

function GraficoEdad() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function allData() {
      const data = await GetUsuarios();
      setUsers(data);
    }
    allData();
  }, []);

  const mayores = users.filter(user => user.edad > 18).length;
  const menores = users.filter(user => user.edad <= 18).length;

  const series = [mayores, menores];

  const options = {
    chart: {
      type: 'donut'
    },
    labels: ['Mayores de edad', 'Menores de edad'],
    colors: ['#4CAF50', '#FF5722'],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`  // Muestra porcentaje
    },
    title: {
      text: 'Distribución por Edad',
      align: 'center',
      style: {
        fontSize: '20px',
        fontWeight: 'bold'
      }
    },
    legend: {
      position: 'right'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  };
console.log('Series:', series);
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <Chart options={options} series={series} type="donut" width="100%" />
    </div>
  );
}

export default GraficoEdad;

