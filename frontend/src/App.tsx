import { NavLink } from "react-router";

function App() {
  return (
    <>
      <div className="initial-page">
        <img src="../public/logo-habitto.png" className="logo-habitto" alt="Habitto" />
        <div className="buttons-initial-page">
          <NavLink className="button-initial" to="/register">Criar Conta</NavLink>
          <NavLink className="button-initial" to="/login">Já tenho</NavLink>
        </div>
      </div>
    </>
  );
}

export default App;
