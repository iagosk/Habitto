import api from "../services/api.ts";
import { useState } from "react";
export default function HydrationHabitsView() {
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
    <div className="hydration-habits">
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
          <i className="fi fi-ss-gym notification-icon"></i>
          <h1>Hábitos de Treino</h1>
        </div>
        <br />
        <h3>Confira a sua rotina de treinos e de prática de exercício físico.</h3>
        <br />
        <h3>“O corpo alcança o que a mente acredita.”</h3>
      </div>
    </div>
  );
}
