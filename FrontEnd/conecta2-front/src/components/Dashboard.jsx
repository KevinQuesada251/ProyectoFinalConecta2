import React from 'react';
import Grafico from './Graficos';
import GraficoEdad from './GraficoEdad';
import GraficoProvincias from './GraficoProvincias';

function Dashboard() {
  return (
    <div className="container py-4" style={{backgroundColor: '#0000FF'}}>
      {/* Título */}
      <div className="row mb-4">
        <div className="col">
          <h1 className="text-center text-white border-bottom"><i class="bi bi-bar-chart-line-fill"></i>  Dashboard</h1>
        </div>
      </div>

      {/* Gráficos 1 y 2 */}
      <div className="row g-4 mb-4">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <Grafico />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <GraficoEdad />
            </div>
          </div>
        </div>
      </div>

      {/* Gráfico 3 */}
      <div className="row">
        <div className="col">
          <div className="card shadow-sm">
            <div className="card-body">
              <GraficoProvincias />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
