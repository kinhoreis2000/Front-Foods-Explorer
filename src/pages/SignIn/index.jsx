import {Container, Form} from './styles'
import {Input} from '../../components/Input'
import {RedButton} from '../../components/RedButton'
import retangularLogo from '../../assets/retangularLogo.svg'

export function SignIn() {

  return(
    <Container>
      <main>
        <header className ='logoSide'>
          <img src={retangularLogo} alt="logo retangular do explorer" /> 
          <h1>food explorer</h1>
        </header> 
          <div className ='UserInteraction'>
            <Form className = 'contentSide'>
              <h2 className= 'desapear'>Faça login</h2>
              <p className='inputField'>Email</p>
              <Input placeholder = 'Example@example.com.br'></Input>
              <p className='inputField'>Senha</p>
              <Input placeholder = 'No mínimo 6 caracteres'></Input>
              <RedButton value = 'Entrar'></RedButton> 

            </Form>
            <footer className = "info"> <a>Crie sua conta</a> </footer>
        </div>
 
      </main>
    </Container>
  )
}

