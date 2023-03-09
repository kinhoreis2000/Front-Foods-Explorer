import {Container} from './styles'
import {Header} from '../../components/Header'
import {MealCard} from '../../components/MealCard'
import topHomeImage from '../../assets/topMainImage.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export function Home() {


  return(
    <Container>
     <Header></Header>
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
                 spaceBetween={200}
                 slidesPerView={2.5}
                 navigation
                 pagination={{ clickable: true }}
                 scrollbar={{ draggable: true }}
                 onSwiper={(swiper) => console.log(swiper)}
                 onSlideChange={() => console.log('slide change')}
                >


                <SwiperSlide>
                  <MealCard
                    className='number-slide4'
                    meal={{
                      name: 'Salada Ravanello',
                      price: 'R$ 49,97',
                      photo: 'https://github.com/kinhoreis2000.png',
                    }}
                  /> 
                </SwiperSlide>
           
                <SwiperSlide>
                  <MealCard
                    className='number-slide4'
                    meal={{
                      name: 'Salada Ravanello',
                      price: 'R$ 49,97',
                      photo: 'https://github.com/kinhoreis2000.png',
                    }}
                  /> 
                </SwiperSlide>
           
                <SwiperSlide>
                  <MealCard
                    className='number-slide4'
                    meal={{
                      name: 'Salada Ravanello',
                      price: 'R$ 49,97',
                      photo: 'https://github.com/kinhoreis2000.png',
                    }}
                  /> 
                </SwiperSlide>
           
             
                <SwiperSlide>
                  <MealCard
                    className='number-slide4'
                    meal={{
                      name: 'Salada Ravanello',
                      price: 'R$ 49,97',
                      photo: 'https://github.com/kinhoreis2000.png',
                    }}
                  /> 
                </SwiperSlide>
           
             




              </Swiper>
              </div>

            </div>
            <div className = 'PratosPrincipais'>
              <h3>PratosPrincipais</h3>
            </div>
            <div className = 'Bebidas'>
              <h3>Bebidas</h3>
            </div>


          </div>
    </Container>
  )
}

