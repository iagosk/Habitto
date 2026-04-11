import { useState } from 'react'
import { NavLink, useNavigate } from "react-router"
import api from "../services/api"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

export default function Home() {
  const navigate = useNavigate()
  const [statusRes, setStatus] = useState<any>('')
  const [email, setEmail] = useState<any>('')
  const [nameUser, setNameUser] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const [c_password, setC_password] = useState<any>('')
  const [window, setWindow] = useState<any>(<></>)


  const handleSubmit: any = async (event: any) => {
    if (email == '' || nameUser == '' || password == '' || c_password == '') {
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

    if (password != c_password) {
      console.log("As senhas não são iguais.")
      setWindow(<Alert variant="danger">
        <Alert.Heading>Erro</Alert.Heading>
        <p>
          As senhas não são iguais.
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

    if(password.length < 8) {
      console.log("A senha deve conter no mínimo 8 caracteres.")
      setWindow(<Alert variant="danger">
        <Alert.Heading>Erro</Alert.Heading>
        <p>
          Senha fraca, a senha deve conter no mínimo 8 caracteres.
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

    // Lógica para lidar com o envio do formulário de registro
    console.log("Formulário de registro enviado");

    try {
      const response = await api.post('register/', {
        nameUser: nameUser,
        email: email,
        password: password
      })

      if(response.status == 201) {
        console.log("Deu certo")
        navigate("/login")  
      }

    } catch (error: any) {
      setStatus(error.status)
      console.log("Status:", error.status)
      switch (error.status) {
        case 400:
          console.log("Error 400: ", error.response.data.nameUser[0])
          return (
            setWindow(<Alert variant="danger">
              <Alert.Heading>Erro</Alert.Heading>
              <p>
                {error.response.data.nameUser[0]}
              </p>
              <hr />
              <div className="d-flex justify-content-end">
                <Button onClick={() => setWindow(<></>)} variant="outline-danger">
                  Fechar
                </Button>
              </div>
            </Alert>)
          )
          break;
        case 404:
          console.log("Error 404: Página não encontrada.")
          return (
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
          )
          break;
        case 201:
          console.log("Deu certo")
          navigate("/login")
          break;
      }
    }
  }


  return (
    <div className="form-area">
      {window}
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
            required
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
            required
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
            required
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
            required
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
