import {Container} from './styles.js'


export function RedButton({title,icon : Icon, ...rest}) {

  return(
    <Container title ={title}>
     <img src = {Icon}/>
     { title }
    </Container>
  )
}

