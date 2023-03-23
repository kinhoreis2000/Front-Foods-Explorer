import {Container} from './styles'

export function TxtArea({value,placeholder, ...rest}) {
  return (
    <Container {...rest} placeholder = {placeholder}>
      {value}
    </Container>
  )
}