import { useState } from "react";

export default function Dashboard() {
  const [agua, setAgua] = useState(20);
  const [calorias, setCalorias] = useState(30);
  const [sono, setSono] = useState(100);
  const [estudo, setEstudo] = useState(10);

  const alterarAgua = (event: any) => {
    setAgua(event.target.value);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-table">
        <h1>Bem vindo, Matheus.</h1>
        <h5>Continue trabalhando duro para conquistar seus objetivos e bater as suas metas.</h5>
      </div>
      <br />
      <div className="dashboard-table">
        <h1>Segunda Feira</h1>
        <h4>17 de Agosto de 2026.</h4>
        <br />
        <div className="notification">
          <i className="fi fi-ss-bell notification-icon"></i>
          <h3>8 metas ativas no momento</h3>
        </div>        
        <br />
        <div className="notification">
          <i className="fi fi-ss-daily-calendar notification-icon"></i>
          <h3>Você tem treino agendado para hoje!</h3>
        </div>
      </div>
    </div>
  );
}
