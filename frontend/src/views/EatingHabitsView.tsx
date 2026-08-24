import api from "../services/api.ts";
import { useState } from "react";
import { Button, Form, Modal, Accordion } from 'react-bootstrap';

function AccordionEating() {
  return (
    <Accordion className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header className="accordion">Segunda Feira</Accordion.Header>
        <Accordion.Body className="accordion">
          <ul>
            <h5>Manhã</h5>
            <li>Ovos mexidos (2 a 3) com pão integral e cafezinho.</li>
          </ul>
          <ul>
            <h5>Tarde</h5>
            <li>Peito de frango grelhado, arroz integral, feijão e salada verde à vontade.</li>
          </ul>
          <ul>
            <h5>Lanche da Tarde / Pré-Treino</h5>
            <li>Vitamina de banana com aveia e pasta de amendoim.</li>
          </ul>
          <ul>
            <h5>Opção de Jantar / Pós-Treino</h5>
            <li>Patinho moído com purê de mandioca e brócolis ao vapor.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Terça Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <h5>Manhã</h5>
            <li>Ovos mexidos (2 a 3) com pão integral e cafezinho.</li>
          </ul>
          <ul>
            <h5>Tarde</h5>
            <li>Peito de frango grelhado, arroz integral, feijão e salada verde à vontade.</li>
          </ul>
          <ul>
            <h5>Lanche da Tarde / Pré-Treino</h5>
            <li>Vitamina de banana com aveia e pasta de amendoim.</li>
          </ul>
          <ul>
            <h5>Opção de Jantar / Pós-Treino</h5>
            <li>Patinho moído com purê de mandioca e brócolis ao vapor.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Quarta Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <h5>Manhã</h5>
            <li>Ovos mexidos (2 a 3) com pão integral e cafezinho.</li>
          </ul>
          <ul>
            <h5>Tarde</h5>
            <li>Peito de frango grelhado, arroz integral, feijão e salada verde à vontade.</li>
          </ul>
          <ul>
            <h5>Lanche da Tarde / Pré-Treino</h5>
            <li>Vitamina de banana com aveia e pasta de amendoim.</li>
          </ul>
          <ul>
            <h5>Opção de Jantar / Pós-Treino</h5>
            <li>Patinho moído com purê de mandioca e brócolis ao vapor.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Quinta Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <h5>Manhã</h5>
            <li>Ovos mexidos (2 a 3) com pão integral e cafezinho.</li>
          </ul>
          <ul>
            <h5>Tarde</h5>
            <li>Peito de frango grelhado, arroz integral, feijão e salada verde à vontade.</li>
          </ul>
          <ul>
            <h5>Lanche da Tarde / Pré-Treino</h5>
            <li>Vitamina de banana com aveia e pasta de amendoim.</li>
          </ul>
          <ul>
            <h5>Opção de Jantar / Pós-Treino</h5>
            <li>Patinho moído com purê de mandioca e brócolis ao vapor.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Sexta Feira</Accordion.Header>
        <Accordion.Body>
          <ul>
            <h5>Manhã</h5>
            <li>Ovos mexidos (2 a 3) com pão integral e cafezinho.</li>
          </ul>
          <ul>
            <h5>Tarde</h5>
            <li>Peito de frango grelhado, arroz integral, feijão e salada verde à vontade.</li>
          </ul>
          <ul>
            <h5>Lanche da Tarde / Pré-Treino</h5>
            <li>Vitamina de banana com aveia e pasta de amendoim.</li>
          </ul>
          <ul>
            <h5>Opção de Jantar / Pós-Treino</h5>
            <li>Patinho moído com purê de mandioca e brócolis ao vapor.</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default function EatingHabitsView() {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="eating-habits">
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-ss-hamburger notification-icon"></i>
          <h1>Hábitos de Alimentação</h1>
        </div>
        <br />
        <h3>Fique por dentro de suas dietas e acompanhe orientações para refeições.</h3>
        <br />
        <h3>"Alimentação saudável não é punição, é autocuidado."</h3>
      </div>
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-sr-salad icon-interface"></i>
          <h1>Dieta Semanal</h1>
        </div>
        <br />
        <h3>Dieta orientada pelo nutricionista:</h3>
        <br />
        <AccordionEating />
      </div>
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-sr-user icon-interface"></i>
          <h1>Nutricionista:</h1>
        </div>
        <br />
        <div className="image-area">
          <img className="nutricionista" src="../../public/images/nutricionista.png" alt="foto da nutricionista." />
          <h1>Dr. Angela Silva</h1>
        </div>
        <br />
      </div>
    </div>

  );
}
