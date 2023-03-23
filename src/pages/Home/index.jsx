import {Container} from './styles'
import {Header} from '../../components/Header'
import {Footer} from '../../components/Footer'
import {FoodCard} from '../../components/FoodCard'
import {FoodCardAdmin} from '../../components/FoodCardAdmin'
import topHomeImage from '../../assets/topMainImage.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {useState, useEffect} from 'react'

import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export function Home() {
  const meals = [
    {
    name: 'Salada Ravanello',
    price: '49,97',
    description: 'MUITA FOME ENQUANTO PENSO NO ALMOÕ',
    category: 'PratoPrincipal',
    photo: 'https://github.com/kinhoreis2000.png'}, {
      
    name: 'Salada Ravanello',
    price: '49,97',
    description: '49,97',
    category: 'sobremesas',
    photo: 'https://github.com/Marcelo.png'
    }, {
      
    name: 'Salada Ravanello',
    price: '49,97',
    description: '49,97',
    category: 'bebidas',
    photo: 'https://github.com/Diego.png'
    }
    , {
      
      name: 'Salada Ravanello',
      price: '49,97',
      description: '49,97',
      category: 'bebidas',
      photo: 'https://github.com/Diego.png'
      }
    , {
      
    name: 'Salada Ravanello',
    price: '49,97',
    description: '49,97',
    category: 'bebidas',
    photo: 'https://github.com/Diego.png'
    }]


  


    useEffect(() => {}, []);
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
              <h3>Sobremesas</h3>
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
                      <FoodCard
                        meal={meal}
                        onClick={() => handleDetails(meal.id)}
                      />
                    </SwiperSlide>
                  ))
                  
                }

 

              </Swiper>
            </div>
            <div className = 'Bebidas'>
              <h3>Bebidas</h3>
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
                      <FoodCard
                        meal={meal}
                        onClick={() => handleDetails(meal.id)}
                      />
                    </SwiperSlide>
                  ))
                  
                }

 

              </Swiper>
            </div>
          <Footer/>

          </div>


    </Container>



  )
 }

