import {Container} from './styles.js'


export function Input({placeholder,onChange ,type,icon: Icon, ...rest}) {

  return(
    <Container >
     {Icon && <Icon size={20}/>} 


      <input type = {type} placeholder = {placeholder} {...rest} onChange = {onChange} ></input>
    </Container>
  )
}

