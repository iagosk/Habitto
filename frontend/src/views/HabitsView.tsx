import api from "../services/api.ts";
import { useState } from "react";
export default function Habits() {
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
    <div className="habits">
      <div className="habit-register">
        <h1>New Habit</h1>
        <form>
          <p>
            <input type="text" name="nameHabit" id="nameHabit" className="input-form" placeholder="Hábito..." required/>
          </p>
          <br />
          <p>
            <input type="text" className="input-form" id="meta" placeholder="Defina uma meta para o hábito..." required/>
          </p>
          <br />
          <p>
            <input className="button-register" type="submit" value="Adicionar" />
          </p>
        </form>
      </div>
      <div className="habits-list">
        <h1>Habits</h1>
        <br />
        <table className="table-habits">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hábito</th>
              <th>Meta</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>{listHabits}</tbody>
        </table>
      </div>
    </div>
  );
}
