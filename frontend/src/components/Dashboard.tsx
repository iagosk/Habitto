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
        <h2>Meta Diária:</h2>
        <br />
        <hr />
        <br />
        <div className="table-graphic">
          <div className="graphic">
            <div className="agua bloco"></div>
            <div className="sono bloco"></div>
            <div className="calorias bloco"></div>
            <div className="estudo bloco"></div>
          </div>
        </div>
        <br />
        <div className="table">
          <p className="data">
            Água Ingerida:
            <div className="data-progress">
              <progress
                className="progress agua-progress"
                value={agua}
                max={100}
              ></progress>
              <span>{agua}%</span>
            </div>
          </p>
          <br />
          <p className="data">
            Calorias:
            <progress
              className="progress calorias-progress"
              value={calorias}
              max={100}
            ></progress>
            <span>{calorias}%</span>
          </p>
          <br />
          <p className="data">
            Horas de Sono:
            <progress
              className="progress sono-progress"
              value={sono}
              max={100}
            ></progress>
            <span>{sono}%</span>
          </p>
          <br />
          <p className="data">
            Horas de Estudo:
            <progress
              className="progress  estudo-progress"
              value={estudo}
              max={100}
            >
              90%
            </progress>
            <span>{estudo}%</span>
          </p>
        </div>
      </div>
      <br />
      <div className="dashboard-table">
        <h2>Dados da Semana</h2>
        <br />
        <hr />
        <br />
        <div className="table">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            corporis ducimus eos magnam dolorem fugiat dolor? Odio expedita,
            iure illo natus vel placeat animi esse libero tempore vitae nemo
            quidem?
          </p>
        </div>
      </div>
      <br />
      <div className="dashboard-table">
        <h2>Dados do Mês</h2>
        <br />
        <hr />
        <br />
        <div className="table">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptatibus harum aliquid porro nulla illo recusandae praesentium
            quos, voluptatum explicabo numquam laboriosam nesciunt? Temporibus
            magni quo doloribus dolorum, iusto aperiam!
          </p>
        </div>
      </div>
    </div>
  );
}
