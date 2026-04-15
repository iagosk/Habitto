import { useState, useEffect } from "react"
import { Outlet, NavLink, useNavigate } from "react-router"
import Sidebar from '../components/Sidebar'
import api from '../services/api'

export default function UserDashboardView() {
  const [exibirSidebar, setExibirSidebar] = useState(false);
  const navigate = useNavigate()
  let [sidebar, setSidebar] = useState(<></>);

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

  const checkExibir = () => {
    if (!exibirSidebar) {
      setSidebar(<Sidebar />)
      setExibirSidebar(true)
    } else {
      setSidebar(<></>);
      setExibirSidebar(false)
    }
  };
  return (
    <div className="user-dashboard">
      <header>
        {sidebar}
        <h1>Habi<span className="destaque">t</span>to<span className="destaque">.</span></h1>
        <div className="button-sidebar">
          <input type="checkbox" name="check-sidebar" id="check-sidebar" />
          <label htmlFor="check-sidebar" onClick={() => checkExibir()}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
