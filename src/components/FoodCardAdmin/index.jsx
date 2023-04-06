
import {Container} from './styles'
import edit from '../../assets/edit.svg'
import { FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {api} from '../../services/api'
export function FoodCardAdmin({meal}) {

  const mealUrl = `${api.defaults.baseURL}files/${meal.image}`


    return(
      <Container >
        <div className= 'card' >
          <div className = 'edit' >
            <img src = {edit} alt ='edit'></img>
          </div>

          <div className = 'mealphoto'>
            <img src = {mealUrl}></img>
          </div>
          <Link to = '/details/?id'className = 'mealName'>{meal.title} <FiArrowRight  style={{ marginLeft: "2px" }} /></Link>
          <label className  = 'mealDesc desapear'>{meal.description}</label>
          <p className = 'mealPrice' >{`${meal.price}`}</p>
        </div>
      </Container>
    )
}