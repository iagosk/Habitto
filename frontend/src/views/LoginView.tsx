import { useState } from 'react'
import { NavLink, useNavigate } from "react-router"
import apiUsers from '../services/users-api'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

export default function Home() {
  const [nameUser, setNameUser] = useState('')
  const [password, setPassword] = useState('')
  const [window, setWindow] = useState<any>(<></>)
  const navigate = useNavigate()

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit: any = async (event: any) => {
    if (nameUser == '' || password == '') {
      console.log("Preencha todos os campos do formulário.")
      console.log(show)
      setWindow(<>
        <Modal
          show={show}
          onHide={() => setWindow(<></>)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className='modal-window modal-header modal-error' closeButton>
            <Modal.Title>
              Erro, preencha todos os campos!
            </Modal.Title>
          </Modal.Header>
        </Modal></>)


      return;
    }
    try {
      const response = await apiUsers.post("login/", {
        nameUser: nameUser,
        password: password
      })
      const token = response.data.access
      localStorage.setItem('access_token', token)
      apiUsers.defaults.headers.common['Authorization'] = `Bearer ${token}`
      console.log("Usuário logado com sucesso!")
      console.log(response.data)
      navigate('/dashboard')
    } catch (error: any) {
      switch (error.status) {
        case 400:
          console.log("Erro do servidor!")
          setWindow(<>
            <Modal
              show={show}
              onHide={() => setWindow(<></>)}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header className='modal-window modal-header modal-error' closeButton>
                <Modal.Title>Erro de servidor, atualize a página!</Modal.Title>
              </Modal.Header>
            </Modal></>)
          break;
        case 401:
          console.log("Erro, usuário ou senha incorretos!")
          setWindow(<>
            <Modal
              show={show}
              onHide={() => setWindow(<></>)}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header className='modal-window modal-header modal-error' closeButton>
                <Modal.Title>
                  Erro, usuário ou senha incorretos!
                </Modal.Title>
              </Modal.Header>
            </Modal></>)
          break;
        case 404:
          console.log("Página não encontrada!")
          setWindow(<>
            <Modal
              show={show}
              onHide={() => setWindow(<></>)}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header className='modal-window modal-header modal-error' closeButton>
                <Modal.Title>
                  Erro, página não encontrada!
                </Modal.Title>
              </Modal.Header>
            </Modal></>)
          break;
      }
    }
  }
  return (
    <div className="form-area">
      {window}
      <form action={handleSubmit}>
        <img src="../../public/logo-habitto.png" alt="Logo" className="logo-habitto" />
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
