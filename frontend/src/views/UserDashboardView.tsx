import { useState, useEffect } from "react"
import { Outlet, NavLink, useNavigate } from "react-router"
import apiUsers from '../services/users-api'
import MenuDropdown from "../components/MenuDropdown"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2 button-interface">
        <i className="fi fi-ss-settings"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Configurações</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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
          <NavLink className="icon-interface icon-header" to="profile">
            <i className="fi fi-ss-user"></i>
          </NavLink>
            {['end'].map((placement, idx) => (
              <OffCanvasExample key={idx} placement={placement} name={placement} />
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
