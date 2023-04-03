import {Container} from './styles'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {FoodCard} from '../../components/FoodCard'
import {FoodCardAdmin} from '../../components/FoodCardAdmin'
import topHomeImage from '../../assets/topMainImage.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useState, useEffect} from 'react'
import {api} from '../../services/api'

import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function Home() {
  const [meals, setMeals] = useState([])

 

    async function handleAddMeals() {
    }
    
  
    const search = ''
    const ingredient = ''

    useEffect(() => {
      async function fetchNotes() {
        const meals = await api.get(`/meals?title=${search}&ingredients=${ingredient}`)

        setMeals(meals.data)
      }
      fetchNotes()

    }, []);
  return(

    <Container>

   
          <Header
          />
 

     <div className ='pageHome'>
      <div  className = 'head'>
          <div className = 'HomeADS'>
            <div className = 'imgSide'>
              <img src = {topHomeImage}></img>
            </div>

            <div className = 'textSide'>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
            
          </div>
      </div>
          
          <div className='content'> 
            <div className = 'refeicoes'>
              <h3>Refeições</h3>
              <Swiper
                 modules={[Navigation, Pagination, Scrollbar, A11y]}
                 spaceBetween={100}
                 slidesPerView='auto'
                 style={{ margin: "0 5vw" ,     paddingRight: '28vw' }}
                 className = 'swiper'
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
                >

                {
                  meals.map(meal => (  
                    <SwiperSlide key={String(meal.id)}  >
                      <FoodCardAdmin
                      
                        meal={meal}
                        onClick={() => handleDetails(meal.id)}
                      />
                    </SwiperSlide>
                  ))
                  
                }

 

              </Swiper> 
              </div>

            </div>
            <div className = 'PratosPrincipais'>
              <h3 onClick = {handleAddMeals}>Sobremesas</h3>
             
            </div>
            <div className = 'Bebidas'>
              <h3>Bebidas</h3>
            
            </div>
          <Footer/>

          </div>


    </Container>



  )
 }

