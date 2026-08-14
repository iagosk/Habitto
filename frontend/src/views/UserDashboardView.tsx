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
      }catch (error) {
        console.error(error)
        navigate('/login')
      }
    })()
  }, [])

  return (
    <div className="user-dashboard">
      <header>
        <h1>Habi<span className="destaque">t</span>to<span className="destaque">.</span></h1>
        <MenuDropdown></MenuDropdown>
      </header>
      <Outlet />
    </div>
  );
}
