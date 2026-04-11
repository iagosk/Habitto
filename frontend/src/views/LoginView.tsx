import { useState } from 'react'
import { NavLink, useNavigate } from "react-router"
import api from '../services/api'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export default function Home() {
  const [nameUser, setNameUser] = useState('')
  const [password, setPassword] = useState('')
  const [window, setWindow] = useState<any>(<></>)
  const navigate = useNavigate()

  const handleSubmit: any = async (event: any) => {
    if (nameUser == '' || password == '') {
      console.log("Preencha todos os campos do formulário.")
      setWindow(<Alert variant="danger">
        <Alert.Heading>Erro</Alert.Heading>
        <p>
          Preencha todos os campos do formulário.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setWindow(<></>)} variant="outline-danger">
            Fechar
          </Button>
        </div>
      </Alert>)

      return;
    }
    try {
      const response = await api.post("login/", {
        nameUser: nameUser,
        password: password
      })
      const token = response.data.access
      localStorage.setItem('access_token', token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      console.log("Usuário logado com sucesso!")
      console.log(response.data)
      navigate('/dashboard')
    } catch (error: any) {
      switch (error.status) {
        case 400:
          console.log("Erro do servidor!")
          setWindow(<Alert variant="danger">
            <Alert.Heading>Erro</Alert.Heading>
            <p>
              Erro interno do servidor.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setWindow(<></>)} variant="outline-danger">
                Fechar
              </Button>
            </div>
          </Alert>)
          break;
        case 401:
          console.log("Acesso não autorizado!")
          setWindow(<Alert variant="danger">
            <Alert.Heading>Erro</Alert.Heading>
            <p>
              Usuário não cadastrado no sistema.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setWindow(<></>)} variant="outline-danger">
                Fechar
              </Button>
            </div>
          </Alert>)
          break;
        case 404:
          console.log("Página não encontrada!")
          setWindow(<Alert variant="danger">
            <Alert.Heading>Erro</Alert.Heading>
            <p>
              Página não encontrada.
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setWindow(<></>)} variant="outline-danger">
                Fechar
              </Button>
            </div>
          </Alert>)
          break;
      }
    }
  }
  return (
    <div className="form-area">
      {window}
      <form action={handleSubmit}>
        <h1 className="title-form">Login</h1>
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
            placeholder="Senha"
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
