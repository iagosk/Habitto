import { NavLink } from "react-router";

function App() {
  return (
    <>
      <div className="initial-page">
        <h1 className="title">Habi<span className="destaque">t</span>to<span className="destaque">.</span></h1>
       
        <br />
        <br />
        <div className="buttons">
          <button>
            <NavLink to="/login">Entrar</NavLink>
          </button>
          <button>
            <NavLink to="/register">Cadastrar</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
