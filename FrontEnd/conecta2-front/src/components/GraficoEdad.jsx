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

  // Forzar un repaint del gráfico cuando haya datos
  useEffect(() => {
    if (users.length > 0) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 300);
    }
  }, [users]);

  // Contar mayores y menores
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
      formatter: (val) => `${val.toFixed(1)}%`
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

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', minHeight: '300px' }}>
      {users.length === 0 ? (
        <p className="text-center">Cargando gráfico...</p>
      ) : (
        <Chart options={options} series={series} type="donut" width="100%" />
      )}
    </div>
  );
}

export default GraficoEdad;

