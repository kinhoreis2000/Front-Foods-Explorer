import {Container, Form} from './styles'
import {Input} from '../../components/Input'
import {RedButton} from '../../components/RedButton'
import HexagonalLogo from '../../assets/HexagonalLogo.svg'
import {useState} from 'react'
import { Link } from 'react-router-dom';


export function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  return(
    <Container>
      <main>
        <header className ='logoSide'>
          <img src={HexagonalLogo} alt="logo retangular do explorer" /> 
          <h1>food explorer</h1>
        </header> 
          <div className ='UserInteraction'>
            <Form className = 'contentSide'>
              <h2 className= 'desapear'>Crie sua conta</h2>

              <p className='inputField'>Nome completo</p>
              <Input 
              onChange = {(e)=>{setFullName(e.target.value)}}
              placeholder = 'Exemplo: Maria da Silva'>
              </Input>

              <p className='inputField'>Email</p>
              <Input 
              onChange = {(e)=>{setEmail(e.target.value)}}
              placeholder = 'Example@example.com.br'>
              </Input>

              <p className='inputField'>Senha</p>
              <Input 
              onChange = {(e)=>{setPassword(e.target.value)}}
              placeholder = 'No mínimo 6 caracteres'>
              </Input>
             
              <RedButton title = 'Criar conta'></RedButton> 

            </Form>
            <footer className = "info"> <Link to = '/signin'>Já tenho uma conta</Link> </footer>
        </div>
 
      </main>
    </Container>
  )
}

