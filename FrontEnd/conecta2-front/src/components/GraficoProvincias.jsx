import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { GetUsuarios } from '../services/UsersServices';

function GraficoProvincias() {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        async function allData() {
            const allUsers = await GetUsuarios()
            setUsers(allUsers)
        }
        allData()
    },[])

    const sanJose = users.filter(user=>user.provincia === 'san jose').length
    const cartago = users.filter(user=>user.provincia === 'cartago').length
    const heredia = users.filter(user=>user.provincia === 'heredia').length
    const alajuela = users.filter(user=>user.provincia === 'alajuela').length
    const puntarenas = users.filter(user=>user.provincia === 'puntarenas').length
    const guanacaste = users.filter(user=>user.provincia === 'guanacaste').length
    const limon = users.filter(user=>user.provincia === 'limón').length
    console.log(sanJose);
    
  const series = [
    {
      name: 'Net Profit',
      data: [sanJose,cartago,alajuela,heredia,puntarenas,guanacaste,limon]
    }
  ];

  const options = {
    chart: {
      type: 'bar'
    },
    xaxis: {
      categories: ['San José','Cartago','Alajuela','Heredia','Puntarenas','Guanacaste','Limón']
    }
  };

  return (
    <div>
      <Chart options={options} series={series} type="bar" width="100%" height="300px" />
    </div>
  );
}

export default GraficoProvincias;
