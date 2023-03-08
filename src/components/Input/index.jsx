import {Container} from './styles.js'


export function Input({placeholder,onChange , ...rest}) {

  return(
    <Container onChange = {onChange} placeholder = {placeholder}>
  
    </Container>
  )
}

