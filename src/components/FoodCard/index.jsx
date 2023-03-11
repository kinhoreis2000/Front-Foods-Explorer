
import {Container} from './styles'
import {RedButton} from '../../components/RedButton'
import heart from '../../assets/heart.svg'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
export function FoodCard({meal}) {




    return(
      <Container >
        <div className= 'card' >
          <div className = 'favorite' >
            <img src = {heart} alt ='favorite'></img>
          </div>

          <div className = 'mealphoto'>
            <img src = {meal.photo}></img>
          </div>
          <h2 className = 'mealName'>{meal.name}</h2>
          <p className = 'mealPrice' >{`R$ ${meal.price}`}</p>
          <div className = 'qtdOfOrder'>
            <img src = {minus}/>
            <label> 01 </label> 
            <img src = {plus}/> 
          </div>
        </div>
        <RedButton title = 'incluir'></RedButton>
      </Container>
    )
}