import api from "../services/api.ts";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';

import Dropdown from 'react-bootstrap/Dropdown';

function Menu() {
  return (
    <Dropdown>
        <Dropdown.Toggle className="menu-training" id="dropdown-basic">
        Semanas Treinadas
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">1° Semana</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2° Semana</Dropdown.Item>
        <Dropdown.Item href="#/action-3">3° Semana</Dropdown.Item>
        <Dropdown.Item href="#/action-4">4° Semana</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function AccordionTraining() {
  return (
    <Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion">Segunda Feira</Accordion.Header>
        <Accordion.Body className="accordion">
          <ul>
            <li>Supino reto (barra ou halteres) – 3 x 10 a 12 repetições</li>

            <li>Supino inclinado com halteres – 3 x 10 a 12 repetições</li>

            <li>Desenvolvimento com halteres (ombros) – 3 x 10 a 12 repetições</li>

            <li>Elevação lateral – 3 x 12 a 15 repetições</li>

            <li>Tríceps corda ou tríceps testa – 3 x 12 a 15 repetições</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Terça Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Supino reto (barra ou halteres) – 3 x 10 a 12 repetições</li>

            <li>Supino inclinado com halteres – 3 x 10 a 12 repetições</li>

            <li>Desenvolvimento com halteres (ombros) – 3 x 10 a 12 repetições</li>

            <li>Elevação lateral – 3 x 12 a 15 repetições</li>

            <li>Tríceps corda ou tríceps testa – 3 x 12 a 15 repetições</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quarta Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Supino reto (barra ou halteres) – 3 x 10 a 12 repetições</li>

            <li>Supino inclinado com halteres – 3 x 10 a 12 repetições</li>

            <li>Desenvolvimento com halteres (ombros) – 3 x 10 a 12 repetições</li>

            <li>Elevação lateral – 3 x 12 a 15 repetições</li>

            <li>Tríceps corda ou tríceps testa – 3 x 12 a 15 repetições</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Quinta Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Supino reto (barra ou halteres) – 3 x 10 a 12 repetições</li>

            <li>Supino inclinado com halteres – 3 x 10 a 12 repetições</li>

            <li>Desenvolvimento com halteres (ombros) – 3 x 10 a 12 repetições</li>

            <li>Elevação lateral – 3 x 12 a 15 repetições</li>

            <li>Tríceps corda ou tríceps testa – 3 x 12 a 15 repetições</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Sexta Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Supino reto (barra ou halteres) – 3 x 10 a 12 repetições</li>

            <li>Supino inclinado com halteres – 3 x 10 a 12 repetições</li>

            <li>Desenvolvimento com halteres (ombros) – 3 x 10 a 12 repetições</li>

            <li>Elevação lateral – 3 x 12 a 15 repetições</li>

            <li>Tríceps corda ou tríceps testa – 3 x 12 a 15 repetições</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default function TrainingHabitsView() {
  const [listHabits, setListHabits] = useState([]);

  const getHabits = async () => {
    const response = await api.get("api-habits/habits-list/");
    const list = response.data;
    const habits = list.map((item: any) => (
      <tr>
        <td key={item.id}>{item.id}</td>
        <td key={item.id}>{item.nameHabit}</td>
        <td key={item.id}>{item.meta}</td>
        <td className="buttons-table">
          <div className="buttons">
            <button>Edit</button>
            <button>Deletar</button>
          </div>
        </td>
      </tr>
    ));

    setListHabits(habits);
  };

  getHabits();
  return (
    <div className="training-habits">
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-ss-gym notification-icon"></i>
          <h1>Hábitos de Treino</h1>
        </div>
        <br />
        <h3>Confira a sua rotina de treinos e de prática de exercício físico.</h3>
        <br />
        <h3>“O corpo alcança o que a mente acredita.”</h3>
      </div>
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-ss-daily-calendar icon-interface"></i>
          <h1>Treino Semanal</h1>
        </div>
        <br />
        <Menu />
        <br />
        <h3>Indicações do Personal:</h3>
        <br />
        <AccordionTraining />
      </div>
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-ss-clock notification-icon"></i>
          <h1>Agendamentos</h1>
        </div>
      </div>
    </div>
  );
}
