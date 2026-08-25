import apiUsers from "../services/users-api.ts";
import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

function List() {
  return (
    <ListGroup className="list">
      <div className="list-header">
        <h6>Horário</h6>
        <h6>Quantidade Recomendada</h6>
      </div>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Ao acordar (07:00)</h6>
        <h6>400 ml a 500 ml</h6>
      </ListGroup.Item>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Meio da manhã (10:00)</h6>
        <h6>350 ml a 500 ml</h6>
      </ListGroup.Item>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Almoço (12:30)</h6>
        <h6>Max. 200 ml</h6>
      </ListGroup.Item>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Pré-Treino (15:00 a 16:00)</h6>
        <h6>400 ml a 600 ml</h6>
      </ListGroup.Item>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Durante o Treino</h6>
        <h6>150 ml a 250 ml a cada 20 min</h6>
      </ListGroup.Item>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Pós-Treino imediato</h6>
        <h6>500 ml</h6>
      </ListGroup.Item>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Início da noite (19:30)</h6>
        <h6>350 ml a 500 ml</h6>
      </ListGroup.Item>
      <ListGroup.Item className="list-item list-hydration">
        <h6>Antes de dormir (22:00)</h6>
        <h6>200 ml</h6>
      </ListGroup.Item>
    </ListGroup>
  );
}
export default function HydrationHabitsView() {
  const [listHabits, setListHabits] = useState([]);

  const getHabits = async () => {
    const response = await apiUsers.get("api-habits/habits-list/");
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
    <div className="view">
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-ss-dewpoint notification-icon"></i>
          <h1>Hábitos de Hidratação</h1>
        </div>
        <br />
        <h3>Certifique-se de que a sua rotina de hidratação está sendo mantida.</h3>
        <br />
        <h3>“Seu corpo agradece cada gole.”</h3>
      </div>
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-sr-water-bottle icon-interface"></i>
          <h1>Hidratação Diária.</h1>
        </div>
        <br />
        <List />
      </div>
    </div>
  );
}
