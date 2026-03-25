import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="form-area">
      <form>
        <h1>Registro</h1>
        <br />
        <p>
          <input
            type="email"
            name="email"
            className="input-form"
            id="email"
            placeholder="Email"
          />
        </p>
        <br />
        <p>
          <input
            type="text"
            name="nameUser"
            className="input-form"
            id="nameUser"
            placeholder="Nome de Usuário"
          />
        </p>
        <br />
        <p>
          <input
            type="password"
            name="password"
            className="input-form"
            id="password"
            placeholder="Crie uma senha"
          />
        </p>
        <br />
        <p>
          <input
            type="password"
            name="c-password"
            className="input-form"
            id="c-password"
            placeholder="Confirme a sua senha"
          />
        </p>
        <br />
        <div className="buttons-form">
          <NavLink to="/" className="button-form-back">
            Voltar
          </NavLink>
          <input className="button-form" type="reset" value="Limpar" />
          <button className="button-form">Cadastrar-se</button>
        </div>
      </form>
    </div>
  );
}
