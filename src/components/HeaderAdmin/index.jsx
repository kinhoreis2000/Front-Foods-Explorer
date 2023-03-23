
import {Container} from './styles'
import {useState} from 'react'
import optionsPhonesvg from '../../assets/optionsPhone.svg'
import hexagonalLogo from '../../assets/hexagonalLogo.svg'
import orderLogo from '../../assets/orderLogo.svg'
import {SideBarAdmin} from '../SideBarAdmin'
import {Input} from '../Input'
import {FiSearch, FiLogOut} from 'react-icons/fi'
import {RedButton} from '../RedButton'
import {Link} from 'react-router-dom'

export function HeaderAdmin() {

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
      
                {sidebar && <SideBarAdmin active = {setSideBar}/>}
          </div>
     
          <div className = 'logoFoodsExplorer'>
            <img
                src = {hexagonalLogo}
                alt='logo foodexplorer'/>
            <div className = 'txtLogoSide'>
              <h1>food explorer</h1>
              <span>admin</span>
            </div>
          </div>

          <div className = 'searchBar desapear'>
              <Input placeholder = 'Busque por pratos ou ingredientes' icon = {FiSearch}></Input> 
          </div>
           

          
          <div className = 'ordersBTN'>
            <p className = 'desktopDesapear'>0</p>
            
          </div>
          <Link to ='newmeal' className = ' desapear'>
              <RedButton title = 'Novo Prato'></RedButton>
           </Link>
           <div className = 'logOutLogo desapear'>
             <a> <FiLogOut></FiLogOut></a>
           </div>
        </div>
   
      </Container>
    )
}