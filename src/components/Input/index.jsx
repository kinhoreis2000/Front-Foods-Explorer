import {Container} from './styles.js'


export function Input({placeholder,onChange ,difColor, type,icon: Icon, ...rest}) {

  return(
    <Container difColor = {difColor}>
     {Icon && <Icon size={20}/>} 


      <input type = {type} placeholder = {placeholder} {...rest} onChange = {onChange} ></input>
    </Container>
  )
}

