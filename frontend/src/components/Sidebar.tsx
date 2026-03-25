import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="user-area-sidebar">
        <img className="image-profile" src="../../public/images/profile.jpeg" alt="foto de perfil" />
        <h2>iagosk</h2>
      </div>
      <ul>
        <NavLink className="sidebar-link" to="/dashboard/">
          <div className="icon">
            <i className="fi fi-sr-home"></i>
          </div>
          Home
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard/profile">
          <div className="icon">
            <i className="fi fi-sr-user"></i>
          </div>
          Perfil
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard/profile">
          <div className="icon">
            <i className="fi fi-sr-chart-line-up"></i>
          </div>
          Metas
        </NavLink>
        <NavLink className="sidebar-link" to="/dashboard/habits">
          <div className="icon">
            <i className="fi fi-sr-gym"></i>
          </div>
          Hábitos
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
