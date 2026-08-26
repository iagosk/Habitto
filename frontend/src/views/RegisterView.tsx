import { useState } from 'react'
import { NavLink, useNavigate } from "react-router"
import apiUsers from "../services/users-api"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Modal from 'react-bootstrap/Modal';

export default function Home() {
  const navigate = useNavigate()
  const [statusRes, setStatus] = useState<any>('')
  const [email, setEmail] = useState<any>('')
  const [typeUser, setType] = useState<any>('')
  const [nameUser, setNameUser] = useState<any>('')
  const [password, setPassword] = useState<any>('')
  const [c_password, setC_password] = useState<any>('')
  const [window, setWindow] = useState<any>(<></>)
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit: any = async (event: any) => {
    if (email == '' || nameUser == '' || password == '' || c_password == '') {
      console.log("Preencha todos os campos do formulário.")
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

    if(typeUser == '' || typeUser == 'Eu sou...') {
      console.log("Tipo de usuário errado!")
      setWindow(<>
        <Modal
          show={show}
          onHide={() => setWindow(<></>)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className='modal-window modal-header modal-error' closeButton>
            <Modal.Title>
              Erro, informe qual será o tipo da conta!
            </Modal.Title>
          </Modal.Header>
        </Modal></>)
    }

    if (password != c_password) {
      console.log("As senhas não são iguais.")
      setWindow(<>
        <Modal
          show={show}
          onHide={() => setWindow(<></>)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className='modal-window modal-header modal-error' closeButton>
            <Modal.Title>
              Erro, as senhas não são iguais!
            </Modal.Title>
          </Modal.Header>
        </Modal></>)
      return;
    }

    if (password.length < 8) {
      console.log("A senha deve conter no mínimo 8 caracteres.")
      setWindow(<>
        <Modal
          show={show}
          onHide={() => setWindow(<></>)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header className='modal-window modal-header modal-error' closeButton>
            <Modal.Title>
              Senha fraca, a senha deve conter no mínimo 8 dígitos!
            </Modal.Title>
          </Modal.Header>
        </Modal></>)
      return;
    }

    // Lógica para lidar com o envio do formulário de registro
    console.log("Formulário de registro enviado");

    try {
      const response = await apiUsers.post('register/', {
        nameUser: nameUser,
        email: email,
        password: password
      })

      if (response.status == 201) {
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
            setWindow(<>
              <Modal
                show={show}
                onHide={() => setWindow(<></>)}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header className='modal-window modal-header modal-error' closeButton>
                  <Modal.Title>
                    Erro 404, página não encontrada!
                  </Modal.Title>
                </Modal.Header>
              </Modal></>)
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
        <img src="../../public/logo-habitto.png" alt="Logo" className="logo-habitto" />
        <br />
        <p>
          <FloatingLabel
            controlId="email"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email"
              name="email"
              className="input-form"
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
          </FloatingLabel>
        </p>
        <br />
        <p>
          <FloatingLabel
            controlId="nameUser"
            label="Nome de Usuário"
            className="mb-3"
          >
            <Form.Control type="text"
              name="nameUser"
              className="input-form"
              id="nameUser"
              value={nameUser}
              onChange={e => setNameUser(e.target.value)}
              placeholder="Nome de Usuário" />
          </FloatingLabel>
        </p>
        <br />
        <p>
          <Form.Select 
            className="input-form"
            size="lg" 
            id="typeUser"
            value={typeUser}
            onChange={e => setType(e.target.value)}>
            <option>Eu sou...</option>
            <option>Aluno</option>
            <option>Personal</option>
            <option>Nutricionista</option>
          </Form.Select>
        </p>
        <br />
        <p>
          <FloatingLabel controlId="password" label="Crie uma Senha">
            <Form.Control type="password"
              name="password"
              className="input-form"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Crie uma senha" />
          </FloatingLabel>
        </p>
        <br />
        <p>
          <FloatingLabel controlId="c-password" label="Confirme a senha">
            <Form.Control type="password"
              name="c-password"
              className="input-form"
              id="c-password"
              value={c_password}
              onChange={e => setC_password(e.target.value)}
              placeholder="Confirme a sua senha" />
          </FloatingLabel>
        </p>
        <br />
        <div className="buttons-form">
          <NavLink to="/" className="button-form-back">
            Voltar
          </NavLink>
          <button type="submit" className="button-form">
            Cadastrar-se
          </button>
        </div>
      </form>
    </div>
  );
}
