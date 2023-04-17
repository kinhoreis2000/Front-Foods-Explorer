import {Container} from './styles'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {RedButton} from '../../components/RedButton'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiArrowLeft} from 'react-icons/fi'
import orderLogo from '../../assets/orderLogo.svg'
import {useAuth} from '../../hooks/auth'
import {HeaderAdmin} from '../../components/HeaderAdmin'
import {useParams} from 'react-router-dom'
import minus from '../../assets/minus.svg'
import plus from '../../assets/plus.svg'
import {api} from '../../services/api'
import {useNavigate} from 'react-router-dom'

export function MealDetails() {
  const {user} = useAuth()
  const params = useParams()
  const navigate = useNavigate()

  const [meal, setMeal] = useState();
  const [search, setSearch] = useState('');

  const mealUrl = meal ? `${api.defaults.baseURL}files/${meal.image}` : '';

  async function handleEdit() {
    console.log('hellou')
    navigate(`/editmeal/${params.id}`)

  }

  

  useEffect(()=> {
    async function fetchMeal(){

      const response = await api.get(`/meals/${params.id}`)
      setMeal(response.data)

    }
    fetchMeal()
  }, [])


  if(user.isadmin) {


  return(

    <Container>
     <HeaderAdmin setSearch = {setSearch} />

     { meal &&
        <div className='MealDetails'>

          <Link to ='/'><FiArrowLeft/>Voltar</Link>
          <div className = 'DetailsData'>
            <div>
              <img className = 'mealPhoto'src = {mealUrl}/>
            </div>
            <div className ='rightSide'>
            <h1>{meal.title}</h1>
            <h3>{meal.description}</h3>
            <div className = 'MealIngredientsSection'>
              <div className = 'MealIngredients'>
                { 
                 meal.ingredients.map(ingredient => (

                  <li key = {String(ingredient.id)}> 
                    <p> {ingredient.name}</p>

                  </li>

                  ))    
                }  
              </div>
            </div>
            <div className = 'orderAndQtd'>
              <></>
              <div className = 'orderBtn'>
                <RedButton onClick = {()=> handleEdit()} title = 'Editar Prato' alt = 'ClickToEdit'/> 
         
              </div>
             </div>
            </div>
          </div>
        </div>
      }


      <Footer/>
    </Container>



  )
  } else {
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
            <h1>{meal.title}</h1>
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
              
              <RedButton alt = 'ClickToOrder'icon = {orderLogo} title = {`pedir - R$ ${meal.price}`} />
                
              
              </div>
             </div>
            </div>
          </div>
        </div>



      <Footer/>
    </Container>

    )
  }

 }

