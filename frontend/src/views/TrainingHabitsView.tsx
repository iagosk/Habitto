import apiUsers from "../services/users-api.ts";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';

function List() {
  return (
    <ListGroup className="list">
      <ListGroup.Item className="list-item"><h6>Terça Feira 19/08</h6><Button className="button-list" variant="outline-success" disabled>Confirmada</Button></ListGroup.Item>
      <ListGroup.Item className="list-item"><h6>Quarta Feira 20/08</h6><Button className="button-list" variant="outline-success" disabled>Confirmada</Button></ListGroup.Item>
      <ListGroup.Item className="list-item"><h6>Quinta Feira 21/08</h6><Button className="button-list" variant="outline-success" disabled>Confirmada</Button></ListGroup.Item>
      <ListGroup.Item className="list-item"><h6>Sexta Feira 22/08</h6><Button className="button-list" variant="outline-success" disabled>Confirmada</Button></ListGroup.Item>
    </ListGroup>
  );
}

function OffCanvasExample({ name, day, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas backdropClassName="offcanvas-training" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title><h1>{day}</h1></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h3>Horários Disponíveis:</h3>
          <br />
          <ul>
            <h3>Manhã</h3>
            <li><h5>07:00 às 08:00</h5></li>
            <li><h5>08:00 às 09:00</h5></li>
            <li><h5>09:00 às 10:00</h5></li>
            <li><h5>10:00 às 11:00</h5></li>
          </ul>
          <br />
          <ul>
            <h3>Tarde</h3>
            <li>
              <h5>13:00 às 14:00</h5>
            </li>
            <li><h5>14:00 às 15:00</h5></li>
            <li><h5>15:00 às 16:00</h5></li>
            <li><h5>16:00 às 17:00</h5></li>
          </ul>
          <br />
          <ul>
            <h3>Noite</h3>
            <li><h5>18:00 às 19:00</h5></li>
            <li><h5>19:00 às 20:00</h5></li>
            <li><h5>20:00 às 21:00</h5></li>
            <li><h5>21:00 às 22:00</h5></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function ButtonDaily({ status, dayRequired }: any) {
  if (status == "Disponível") {
    return (
      <>
        <Button variant="outline-success" disabled>{status}</Button>
        {['Agendar'].map((placement, idx) => (
          <OffCanvasExample className="offcanvas-training" key={idx} placement={placement} name={placement} day={dayRequired} />
        ))}
      </>
    );
  } else {
    return (
      <>
        <Button variant="outline-danger" disabled>{status}</Button>
        <Button className="button-schedule" disabled>Agendar</Button>
      </>

    )
  }
}

function CarouselDaily() {
  return (
    <Carousel className="carousel-daily">
      <Carousel.Item>
        <div className="dashboard-table">
          <h1>Segunda Feira</h1>
          <p>18/08</p>
          <div className="buttons-daily">
            <ButtonDaily status="Disponível" dayRequired="Segunda Feira" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="dashboard-table">
          <h1>Terça Feira</h1>
          <p>19/08</p>
          <div className="buttons-daily">
            <ButtonDaily status="Disponível" dayRequired="Terça Feira" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="dashboard-table">
          <h1>Quarta Feira</h1>
          <p>20/08</p>
          <div className="buttons-daily">
            <ButtonDaily status="Indisponível" dayRequired="Quarta Feira" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="dashboard-table">
          <h1>Quinta Feira</h1>
          <p>21/08</p>
          <div className="buttons-daily">
            <ButtonDaily status="Disponível" dayRequired="Quinta Feira" />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="dashboard-table">
          <h1>Sexta Feira</h1>
          <p>22/08</p>
          <div className="buttons-daily">
            <ButtonDaily status="Disponível" dayRequired="Sexta Feira" />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
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
          <i className="fi fi-sr-calendar-check icon-interface"></i>
          <h1>Agendados</h1>
        </div>
        <br />
        <List />
      </div>
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-ss-daily-calendar icon-interface"></i>
          <h1>Treino Semanal</h1>
        </div>
        <br />
        <h3>Indicações do Personal para esta semana:</h3>
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
      <br />
      <CarouselDaily />
      <br />
      <div className="dashboard-table">
        <div className="notification">
          <i className="fi fi-sr-user icon-interface"></i>
          <h1>Personal:</h1>
        </div>
        <br />
        <div className="image-area">
          <img className="personal" src="../../public/images/personal.png" alt="foto do personal." />
          <h1>Gustavo Freitas</h1>
        </div>
        <br />
      </div>
    </div>

  );
}
