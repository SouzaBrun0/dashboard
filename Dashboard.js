import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Bem-vindo ao Painel</h1>
      <div className="widgets">
        <div className="widget">Usuários Ativos: 120</div>
        <div className="widget">Vendas Hoje: R$ 3.500</div>
        <div className="widget">Novos Leads: 30</div>
      </div>
    </div>
  );
};

export default Dashboard;
