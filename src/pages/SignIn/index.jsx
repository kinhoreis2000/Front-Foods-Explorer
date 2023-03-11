import {Container, Form} from './styles'
import {Input} from '../../components/Input'
import {RedButton} from '../../components/RedButton'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import {useState} from 'react'
import { Link } from 'react-router-dom';


export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return(
    <Container>
      <main>
        <header className ='logoSide'>
          <img src={hexagonalLogo} alt="logo hexagonal do explorer" /> 
          <h1>food explorer</h1>
        </header> 
          <div className ='UserInteraction'>
            <Form className = 'contentSide'>
              <h2 className= 'desapear'>Faça login</h2>
              <p className='inputField'>Email</p>
              <Input 
              onChange = {(e)=>{setEmail(e.target.value)}}
              placeholder = 'Example@example.com.br'></Input>
              <p className='inputField'>Senha</p>
              <Input 
              onChange = {(e)=>{setPassword(e.target.value)}}
              placeholder = 'No mínimo 6 caracteres'></Input>
              <RedButton title = 'Entrar'></RedButton> 

            </Form>
            <footer className = "info"> <Link to = '/signup'>Crie sua conta</Link> </footer>
        </div>
 
      </main>
    </Container>
  )
}

