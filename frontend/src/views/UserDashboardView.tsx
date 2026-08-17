import { useState, useEffect } from "react"
import { Outlet, NavLink, useNavigate } from "react-router"
import api from '../services/api'
import MenuDropdown from "../components/MenuDropdown"

export default function UserDashboardView() {
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get('/user-customer/user-dashboard/')
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
        <img className="logo-header" src="../../public/logo-habitto.png" alt="Logo do Habitto" />
        <div className="icons-header">
          <NavLink className="icon-interface" to="profile">
            <i className="fi fi-ss-user"></i>
          </NavLink>
          <NavLink className="icon-interface" to="settings">
            <i className="fi fi-ss-settings"></i>
          </NavLink>
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
        <NavLink className="icon-interface icon-settings" to="">
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
