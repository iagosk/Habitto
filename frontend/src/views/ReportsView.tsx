import Progress from "../components/ProgressBar";

export default function ReportsView() {
  return (
    <div className="view">
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-sc-chart-simple notification-icon"></i>
          <h1>Desempenho Semanal</h1>
        </div>
        <br />
        <div className="title-progress">
          <i className="fi fi-sc-gym notification-icon"></i>
          <h2>Treino 70%</h2>
        </div>
        <br />
        <progress className="progressBar" value={70} max={100} />
        <br />
        <br />
        <div className="title-progress">
          <i className="fi fi-ss-hamburger notification-icon"></i>
          <h2>Alimentação </h2>
          <h2>40%</h2>
        </div>
        <br />
        <progress className="progressBar" value={70} max={100} />
        <br />
        <br />
        <div className="title-progress">
          <i className="fi fi-ss-dewpoint notification-icon"></i>
          <h2>Hidratação </h2>
          <h2>10%</h2>
        </div>
        <br />
        <progress className="progressBar" value={10} max={100} />
      </div>
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-sc-chart-simple notification-icon"></i>
          <h1>Desempenho Mensal</h1>
        </div>
        <br />
        <div className="title-progress">
          <i className="fi fi-sc-gym notification-icon"></i>
          <h2>Treino 20%</h2>
        </div>
        <br />
        <progress className="progressBar" value={20} max={100} />
        <br />
        <br />
        <div className="title-progress">
          <i className="fi fi-ss-hamburger notification-icon"></i>
          <h2>Alimentação </h2>
          <h2>40%</h2>
        </div>
        <br />
        <progress className="progressBar" value={70} max={100} />
        <br />
        <br />
        <div className="title-progress">
          <i className="fi fi-ss-dewpoint notification-icon"></i>
          <h2>Hidratação </h2>
          <h2>10%</h2>
        </div>
        <br />
        <progress className="progressBar" value={10} max={100} />
      </div>
    </div>
  )
}