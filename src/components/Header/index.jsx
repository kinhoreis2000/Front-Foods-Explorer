
import {Container} from './styles'
import optionsPhonesvg from '../../assets/optionsPhone.svg'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import orderLogo from '../../assets/orderLogo.svg'

export function Header() {
    return(
      <Container>
        <div className = 'header'>
          <div  className = 'optionsPhone'>
            <img
                src = {optionsPhonesvg}
                alt='Foto do usuário'/>
          </div>

          <div className = 'logoFoodsExplorer'>
            <img
                src = {hexagonalLogo}
                alt='logo foodexplorer'/>
            <h1>food explorer</h1>
          </div>
          
          <div className = 'ordersBTN'>
            <p>0</p>
            
            <img
                src = {orderLogo}
                alt='Foto do usuário'/>
          </div>

        </div>

      </Container>
    )
}