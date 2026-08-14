import { NavLink } from "react-router";

function App() {
  return (
    <>  
      <div className="initial-page">
        <img src="../public/logo-habitto.png" className="logo-habitto" alt="Habitto" />
        <div className="buttons-initial-page">
          <button>
            <NavLink to="/register">Criar Conta</NavLink>
          </button>
          <button>
            <NavLink to="/login">Já tenho</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
