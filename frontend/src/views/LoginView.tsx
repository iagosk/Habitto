import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="form-area">
      <form>
        <h1 className="title-form">Login</h1>
        <br />
        <p>
          <input
            type="text"
            name="nameUser"
            className="input-form"
            id="nameUser"
            placeholder="Nome de Usuário..."
          />
        </p>
        <br />
        <p>
          <input
            type="password"
            name="password"
            className="input-form"
            id="password"
            placeholder="Senha..."
          />
        </p>
        <br />
        <div className="buttons-form">
          <NavLink to="/" className="button-form-back">
            Voltar
          </NavLink>
          <button className="button-form">Entrar</button>
        </div>
      </form>
    </div>
  );
}
