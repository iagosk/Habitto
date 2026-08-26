import { useState, useEffect } from "react"
import { Outlet, NavLink, useNavigate } from "react-router"
import apiUsers from '../services/users-api'
import MenuDropdown from "../components/MenuDropdown"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Dropdown from "react-bootstrap/Dropdown";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 button-interface">
        <i className="fi fi-ss-settings"></i>
      </Button>
      <Offcanvas backdropClassName="offcanvas-settings" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header className="offcanvas-header-settings" closeButton>
          <i className="fi fi-ss-settings"></i>
          <Offcanvas.Title>
            <h2>Configurações</h2>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <div className="title-settings">
              <i className="fi fi-ss-user icon-interface-settings"></i>
              <h2>Perfil</h2>
            <Dropdown>
              <Dropdown.Toggle className="button-update-profile" id="dropdown-basic" size="sm">
                Editar
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Nome de Usuário</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Senha</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <hr />
            <div className="title-settings">
              <i className="fi fi-sr-palette icon-interface-settings"></i>
              <h2>Tema</h2>
            </div>
            <Form.Check
              type="switch"
              className="switch-settings"
              id="custom-switch"
              label="Modo Escuro"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Modo Claro"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Padrão do Sistema"
            />
            <br />
            <div className="title-settings">
              <i className="fi fi-ss-user-key icon-interface-settings"></i>
              <h2>Permissões</h2>
            </div>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Áudio"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Notificações"
            />
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Localização"
            />
            <div className="title-settings">
              <i className="fi fi-sr-heart-partner-handshake icon-interface-settings"></i>
              <h2>Ajuda</h2>
            </div>
            <a href="#">Central de Ajuda</a>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default function UserDashboardView() {
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const response = await apiUsers.get('/user-customer/user-dashboard/')
        console.log('usuário encontrado: ', response)
      } catch (error) {
        console.error(error)
        navigate('/login')
      }
    })()
  }, [])

  return (
    <div className="user-dashboard">
      <header>
        <img className="logo-header" src="../../public/logo.jpeg" alt="Logo do Habitto" />
        <div className="icons-header">
          {['end'].map((placement, idx) => (
            <OffCanvasExample className="offcanvas-settings" key={idx} placement={placement} name={placement} />
          ))}
        </div>
      </header>
      <Outlet />
      <footer>
        <NavLink className="icon-interface" to="training-habits">
          <i className="fi fi-sr-gym"></i>
        </NavLink>
        <NavLink className="icon-interface" to="eating-habits">
          <i className="fi fi-ss-hamburger"></i>
        </NavLink>
        <NavLink className="icon-interface icon-home" to="">
          <i className="fi fi-ss-home"></i>
        </NavLink>
        <NavLink className="icon-interface icon-interface" to="hydration-habits">
          <i className="fi fi-ss-dewpoint"></i>
        </NavLink>
        <NavLink className="icon-interface" to="reports">
          <i className="fi fi-sc-chart-simple"></i>
        </NavLink>
      </footer>
    </div>
  );
}
