
import {Container} from './styles'
import {useState} from 'react'
import optionsPhonesvg from '../../assets/optionsPhone.svg'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import orderLogo from '../../assets/orderLogo.svg'
import {SideBar} from '../SideBar'


export function Header() {
  const [sidebar, setSideBar] = useState(false)
  const showSideBar = () =>setSideBar(!sidebar)

  
    return(
      <Container>
        <div className = 'header'>
          <div  className = 'optionsPhone'>

          <img
          src = {optionsPhonesvg}
          alt='Logo para sideBar'
          className ='LogoForSideBar'
          onClick = {showSideBar}/>
      
                {sidebar && <SideBar active = {setSideBar}/>}
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