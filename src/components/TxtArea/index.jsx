import {Container} from './styles.js'


export function TxtArea({placeholder,onChange ,icon: Icon, ...rest}) {

  return(
    <Container >
     {Icon && <Icon size={20}/>} 


      <input placeholder = {placeholder} {...rest} onChange = {onChange} ></input>
    </Container>
  )
}

