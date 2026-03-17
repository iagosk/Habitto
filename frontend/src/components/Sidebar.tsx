import { NavLink } from 'react-router'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user-area-sidebar">
        <img src="" alt="foto de perfil" />
        <h2>Iagosk</h2>
      </div>
      <ul>
        <NavLink className="sidebar-link" to="/dashboard/">
          <div className="icon">
            <i className="fi fi-sr-home"></i>
          </div>
          Home
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard/habits">
          <div className="icon">
            <i className="fi fi-sr-gym"></i>
          </div>
          Habits
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard/profile">
          <div className="icon">
            <i className="fi fi-sr-user"></i>
          </div>
          Profile
        </NavLink>
        <NavLink className="sidebar-link logout" to="/dashboard/">
          <div className="icon">
            <i className="fi fi-sr-leave"></i>
          </div>
          Logout
        </NavLink>
      </ul>
    </div>
  );
}