
import {Container} from './styles'
import edit from '../../assets/edit.svg'
import { FiArrowRight} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export function FoodCardAdmin({meal}) {




    return(
      <Container >
        <div className= 'card' >
          <div className = 'edit' >
            <img src = {edit} alt ='edit'></img>
          </div>

          <div className = 'mealphoto'>
            <img src = {meal.photo}></img>
          </div>
          <Link to = '/details/?id'className = 'mealName'>{meal.name} <FiArrowRight  style={{ marginLeft: "2px" }} /></Link>
          <label className  = 'mealDesc desapear'>{meal.description}</label>
          <p className = 'mealPrice' >{`R$ ${meal.price}`}</p>
        </div>
      </Container>
    )
}