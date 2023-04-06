
import {Container} from './styles'
import {useState} from 'react'
import optionsPhonesvg from '../../assets/optionsPhone.svg'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import orderLogo from '../../assets/orderLogo.svg'
import {SideBar} from '../SideBar'
import {Input} from '../Input'
import {RedButton} from '../RedButton'
import {FiSearch, FiLogOut} from 'react-icons/fi'

export function Header() {
  const [sidebar, setSideBar] = useState(false)
  const showSideBar = () =>setSideBar(!sidebar)


  function handleLogOut(){
    localStorage.removeItem('foodsExplorer:token')
    localStorage.removeItem('foodsExplorer:user')
  }


    return(
      <Container >
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
          <div className = 'searchBar desapear'>
              <Input className = 'searchInput'placeholder = 'Busque por pratos ou ingredientes' icon = {FiSearch}></Input>
           </div>
          
          <div className = 'ordersBTN'>
            <p className = 'desktopDesapear'>0</p>
            
            <img 
                src = {orderLogo}
                alt='order Logo'
                className = 'imageOrderLogo'/>
          </div>
          <div className = ' desapear'>
              <RedButton title = 'pedidos (0)' icon = {orderLogo}></RedButton>
           </div>
           <div className = 'logOutLogo desapear'>
           <a onClick = {handleLogOut}> <FiLogOut></FiLogOut></a>
           </div>
        </div>
   

      </Container>
    )
    
}