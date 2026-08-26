import { useState } from "react";

export default function Dashboard() {
  const dayNow : Date = new Date(); 
  const opcoes: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const diaSemana =  dayNow.toLocaleString('pt-BR', { weekday: 'long'});

  const dataHoraPT: string = dayNow.toLocaleString('pt-BR', opcoes);
  console.log(dayNow)
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
        <h5>Continue trabalhando duro para conquistar seus objetivos e alcançar as suas metas.</h5>
      </div>
      <br />
      <div className="dashboard-table">
        <h1>{diaSemana}</h1>
        <h4>{dataHoraPT}</h4>
        <br />
        <div className="notification">
          <i className="fi fi-ss-bell notification-icon"></i>
          <h3>3 metas para esta semana.</h3>
        </div>        
        <br />
        <div className="notification">
          <i className="fi fi-ss-daily-calendar notification-icon"></i>
          <h3>Você tem treino agendado para hoje!</h3>
        </div>
      </div>
      <br />
      <div className="dashboard-table">
        <h1>Metas para esta Semana:</h1>
        <h4></h4>
        <br />
        <div className="notification">
          <i className="fi fi-ss-gym notification-icon"></i>
          <h3>2 - Treinos de Bíceps.</h3>
        </div>
        <br />
        <div className="notification">
          <i className="fi fi-ss-hamburger notification-icon"></i>
          <h3>Consumir menos carboidratos.</h3>
        </div>
        <br />
        <div className="notification">
          <i className="fi fi-ss-dewpoint notification-icon"></i>
          <h3>Ingerir 5L de água.</h3>
        </div>
      </div>
      <br />
      <div className="dashboard-table">
        <h1>Metas para este Mês:</h1>
        <h4></h4>
        <br />
        <div className="notification">
          <i className="fi fi-ss-gym notification-icon"></i>
          <h3>2 - Treinos de Bíceps.</h3>
        </div>
        <br />
        <div className="notification">
          <i className="fi fi-ss-hamburger notification-icon"></i>
          <h3>Consumir menos carboidratos.</h3>
        </div>
        <br />
        <div className="notification">
          <i className="fi fi-ss-gym notification-icon"></i>
          <h3>2 - Treinos de Bíceps.</h3>
        </div>
        <br />
        <div className="notification">
          <i className="fi fi-ss-dewpoint notification-icon"></i>
          <h3>Ingerir 5L de água.</h3>
        </div>
        <br />
        <div className="notification">
          <i className="fi fi-ss-dewpoint notification-icon"></i>
          <h3>Ingerir 5L de água.</h3>
        </div>
      </div>
    </div>
  );
}
