import {Container} from './styles'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {RedButton} from '../../components/RedButton'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FiArrowLeft} from 'react-icons/fi'
import orderLogo from '../../assets/orderLogo.svg'

import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'

export function MealDetails() {
  var [meal, setMeal] = useState(null);
  meal ={
    name: 'Salada Ravanello',
    ingredients: ['Alface', 'cebola', 'pão naan', 'pepino', 'rabanete', 'tomate'],
    description: 'Saladinha fitness, preparada com muita verdura e com todo o carinho da casa. Ideal para quem está em dieta e quer contar suas calorias',
    price: '49,97',
    photo: 'https://github.com/kinhoreis2000.png',
  }

  return(

    <Container>
     <Header/>
        <div className='MealDetails'>

          <Link to ='/'><FiArrowLeft/>Voltar</Link>
          <div className = 'DetailsData'>
            <div>
              <img className = 'mealPhoto'src = {meal.photo}/>
            </div>
            <div className ='rightSide'>
            <h1>{meal.name}</h1>
            <h3>{meal.description}</h3>
            <div className = 'MealIngredientsSection'>
              <div className = 'MealIngredients'>
                { meal.ingredients.map(ingredient => (

                  <li key = {String(ingredient.id)}> 
                    <p> {ingredient}</p>

                  </li>

                  ))    
                }  
              </div>
            </div>
            <div className = 'orderAndQtd'>
              <div className = 'qtdOfOrder'>
                <img src = {minus}/>
                <label> 01 </label> 
                <img src = {plus}/> 
              </div>
              
              <div className = 'orderBtn'>
                <RedButton icon = {orderLogo} title = {`pedir - R$ ${meal.price}`} />
              
              </div>
             </div>
            </div>
          </div>
        </div>



      <Footer/>
    </Container>



  )
 }

