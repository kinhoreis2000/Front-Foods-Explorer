import {Container} from './styles'
import {Input} from '../Input'
import {TxtLink} from '../TxtLink'
import close from '../../assets/close.svg'
import {FiSearch} from 'react-icons/fi'
import { Link} from 'react-router-dom'
export function SideBar({active}) {

  const closeSideBar = () => {
    active(false)
  }

    return(
      <Container>
        <div className = 'sidebar'>
          <div className = 'sideBarContent'>
            <div className ='topMenu'>
            <img
              src = {close}
              alt='Fechar sideBar'
              onClick = {closeSideBar}
              />
            </div>

            <div className = 'searchBar'>
              <Input placeholder = 'Busque por pratos ou ingredientes' icon = {FiSearch}></Input>
           </div>

           <div className ='sideBarOptions'>
            <Link to = ''>Sair</Link>
            </div> 
         </div>
        </div>
      </Container>
    )
}