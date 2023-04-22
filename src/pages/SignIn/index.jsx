import {Container, Form} from './styles'
import {Input} from '../../components/Input'
import {RedButton} from '../../components/RedButton'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import {api} from '../../services/api'
import {useAuth} from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {signIn} = useAuth()

  
  async function handleFormSubmit(event) {
    event.preventDefault();
    
    setIsSubmitting(true)

    if(!email || !password){
    alert('preencha todos os campos')
    return
    }
    try{
      await signIn({email, password})
      setIsSubmitting(false)

    }catch(error){
      setIsSubmitting(false)

      alert(error.response.data.message)

    }



  }


  return(
    <Container>
      <main>
        <header className ='logoSide'>
          <img src={hexagonalLogo} alt="logo hexagonal do explorer" /> 
          <h1>food explorer</h1>
        </header> 
          <div className ='UserInteraction'>
            <Form onSubmit = {handleFormSubmit} className = 'contentSide'>
              <h2 className= 'desapear'>Faça login</h2>
              <p className='inputField'>Email</p>
              <Input 
              onChange = {(e)=>{setEmail(e.target.value)}}
              placeholder = 'Example@example.com.br'></Input>
              <p className='inputField'>Senha</p>
              <Input 
              onChange = {(e)=>{setPassword(e.target.value)}}
              placeholder = 'No mínimo 6 caracteres'
              type = 'password'></Input>
              <RedButton title = {isSubmitting? 'Carregando...':'Entrar'}></RedButton> 

            </Form>
            <footer className = "info"> <Link to = '/signup'>Crie sua conta</Link> </footer>
        </div>
 
      </main>
    </Container>
  )
}

