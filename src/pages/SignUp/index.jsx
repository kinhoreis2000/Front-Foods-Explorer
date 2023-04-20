import {Container, Form} from './styles'
import {Input} from '../../components/Input'
import {RedButton} from '../../components/RedButton'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import {api} from '../../services/api'
import {useNavigate} from 'react-router-dom'
export function SignUp() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigate = useNavigate()
  async function handleFormSubmit(event) {
    event.preventDefault();
        if(!fullName || !email || !password){
      alert('preencha todos os campos')
      return
    }

    try{
      await api.post('/users',{name :fullName, email, password})
      alert('usuário cadastrado com sucesso')
      navigate('/')
    } catch(error){
      alert(error.response.data.message)
    }
 

  }
  return(
    <Container>
      <main>
        <header className ='logoSide'>
          <img src={hexagonalLogo} alt="logo retangular do explorer" /> 
          <h1>food explorer</h1>
        </header> 
          <div className ='UserInteraction'>
            <Form onSubmit = {handleFormSubmit} className = 'contentSide'>
              <h2 className= 'desapear'>Crie sua conta</h2>

              <p className='inputField'>Nome completo</p>
              <Input 
              onChange = {(e)=>{setFullName(e.target.value)}}
              placeholder = 'Exemplo: Maria da Silva'
              required>
              </Input>

              <p className='inputField'>Email</p>
              <Input 
              onChange = {(e)=>{setEmail(e.target.value)}}
              placeholder = 'Example@example.com.br'
              type = 'email'
              required>
              </Input>

              <p className='inputField'>Senha</p>
              <Input 
              onChange = {(e)=>{setPassword(e.target.value)}}
              placeholder = 'No mínimo 6 caracteres'
              type= 'password'
              minLength="6"
               required>
              </Input>
             
              <RedButton title = 'Criar conta'></RedButton> 

            </Form>
            <footer className = "info"> <Link to = '/'>Já tenho uma conta</Link> </footer>
        </div>
 
      </main>
    </Container>
  )
}

