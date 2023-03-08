import {Container} from './styles'
import {Header} from '../../components/Header'
import topHomeImage from '../../assets/topMainImage.svg'


export function Home() {

  
  return(
    <Container>
     <Header></Header>
      <div className = 'page'>
          <div className = 'HomeADS'>
            <div className = 'imgSide'>
              <img src = {topHomeImage}></img>
            </div>

            <div className = 'textSide'>
              <h2>Sabores inigualáveis</h2>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </div>
            
          </div>

          
         {/*  
          <div className='content'> 
            <div clasNamme = 'refeicoes'>
              <h3>Refeições</h3>
              <RenderRefCards></RenderRefCards>
            </div>
            <div clasNamme = 'PratosPrincipais'>
              <h3>PratosPrincipais</h3>
              <RenderMainPlateCards></RenderMainPlateCards>
            </div>
            <div clasNamme = 'Bebidas'>
              <h3>Bebidas</h3>
              <RenderDrinksCards></RenderDrinksCards>
            </div>


          </div>
 */}
    </div>
    </Container>
  )
}

