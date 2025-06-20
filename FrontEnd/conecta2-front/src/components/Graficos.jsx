import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { GetUsuarios } from '../services/UsersServices';

const Grafico = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        async function traerInfo() {
            const traerInfo = await GetUsuarios('users')
            setUsers(traerInfo)
        }
        traerInfo()
    },[])

     const totalUsuarios = users.length

  const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '60%',
        },
        dataLabels: {
          name: {
            show: true,
            fontSize: '18px',
          },
          value: {
            fontSize: '24px',
          },
        }
      },
    },
    labels: ['Usuarios'],
  };

  const series = [totalUsuarios]; // Por ejemplo: [45]

  return (
    <div>
      <h4 className='text-center'>Total de Usuarios</h4>
      <Chart options={options} series={series} type="radialBar" height={300} />
    </div>
  );
};

export default Grafico;
