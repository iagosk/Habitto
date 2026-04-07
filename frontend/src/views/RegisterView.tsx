import { NavLink } from "react-router"
import api from "../services/api"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Alert from '../components/Window'


export default function Home() {
  const navigate = useNavigate()
  const [statusRes, setStatus] = useState<any>('')
  const [email, setEmail] = useState<any>('')
  const [nameUser, setNameUser] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const [c_password, setC_password] = useState<any>('')

  const handleSubmit = async (event: any) => {
    const response = await api.post('register/', {
      nameUser: nameUser,
      email: email,
      password: password
    })
    console.log(response)


    if (response.status == 201) {
      console.log("Deu certo")
      setStatus(response.status)
    }

    // Lógica para lidar com o envio do formulário de registro
    console.log("Formulário de registro enviado");
  }

  if (statusRes === 201) {
    // <Alert header_content="Sucesso" main_content="Você foi cadastrado com sucesso seja redirecionado para a " type="s" color="green" />
    console.log("Deu certo")
    navigate("/login")
  } else if (statusRes == 404) {
    return (
      <Alert header_content="Error" main_content="Conteúdo não encontrado" type="alert" color="darkred" />
    )
  };

  return (
    <div className="form-area">
      <form action={handleSubmit}>
        <h1>Registro</h1>
        <br />
        <p>
          <input
            type="email"
            name="email"
            className="input-form"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={nameUser}
            onChange={e => setNameUser(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            value={c_password}
            onChange={e => setC_password(e.target.value)}
            placeholder="Confirme a sua senha"
          />
        </p>
        <br />
        <div className="buttons-form">
          <NavLink to="/" className="button-form-back">
            Voltar
          </NavLink>
          <input className="button-form" type="reset" value="Limpar" />
          <button type="submit" className="button-form">
            Cadastrar-se
          </button>
        </div>
      </form>
    </div>
  );
}
