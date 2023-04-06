
import {Container} from './styles'
import {RedButton} from '../../components/RedButton'
import {Link} from 'react-router-dom'
import heart from '../../assets/heart.svg'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import {api} from '../../services/api'

export function FoodCard({meal}) {

  const mealUrl = `${api.defaults.baseURL}files/${meal.image}`



    return(
      <Container >
        <div className= 'card' >
          <div className = 'favorite' >
            <img src = {heart} alt ='favorite'></img>
          </div>

          <div className = 'mealphoto'>
            <img src = {mealUrl}></img>
          </div>
          <Link className = 'mealName'>{meal.title}</Link>
          <label className  = 'mealDesc desapear'>{meal.description}</label>
          <p className = 'mealPrice' >{`R$ ${meal.price}`}</p>
          <div className = 'qtdOfOrder'>
            <img src = {minus}/>
            <label> 01 </label> 
            <img src = {plus}/> 
            <RedButton title = 'incluir'></RedButton>
          </div>
        </div>
      </Container>
    )
}