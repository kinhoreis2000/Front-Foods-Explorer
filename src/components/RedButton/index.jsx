import {Container} from './styles.js'


export function RedButton({title,icon : Icon,alt, ...rest}) {


  return(
    <Container title ={title}>
      {
        Icon ?
        <img src = {Icon} alt ={alt}/>
        :
        <></>
      }
     { title }
    </Container>
  )
}

