import styled from 'styled-components'



interface AlertI {
  header_content: string;
  main_content: string;
  type: string;
  color: string;
}

export default function Alert({ header_content, main_content, type, color }: AlertI) {
  const Button = styled.div`
  background-color: ${color};
  color: #fff;
  border-radius: 6px;
  width: 90%;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  cursor: pointer;
`
  const ButtonAlert = () => {
    return (
      <Button>Ok</Button>
    )
  }

  const ButtonsConfirm = () => {
    return (
      <div className="buttons-window">
        <Button>Cancelar</Button>
        <Button>Ok</Button>
      </div>
    )
  }

  let buttonsFooter;


  return (
    <div className="window">
      <header style={{ backgroundColor: color }}>
        <h2>{header_content}</h2>
      </header>
      <main>
        {main_content}
      </main>
      <footer>
        {type == 'alert' ? <ButtonAlert /> : <ButtonsConfirm />}
      </footer>
    </div>
  )

  switch (type) {
    case 'alert':
      return (
        buttonsFooter = <ButtonAlert />
      )
      break;
    case 'confirm':
      return (
        buttonsFooter = <ButtonsConfirm />
      )
      break;
  }
}