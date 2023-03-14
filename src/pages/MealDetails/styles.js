import styled from 'styled-components';
import 'swiper/css';

export const Container = styled.div`
  li:nth-child(1) {
    margin-left: 1rem;
  }
  .DetailsData{
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
    overflow: hidden;

    
  }
  .MealDetails{
    min-height:100%;
    position:relative;
    flex: 1;

  }
  footer {
  position: relative;
  bottom: 0;
}


   >.MealDetails {
    padding-top: 19vh;
    h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 1.62247rem;
        line-height: 140%;

        text-align: center;

        color: ${({theme})=> theme.COLORS.TXT_LIGHT_300};
        margin: 2.5rem 2.5rem;
      }
    .MealIngredientsSection{
      max-width: 100vw;
    }
    .MealIngredients {
      justify-content: space-evenly;
      display: flex;
      align-content: center;
      flex-direction: row;
      gap: 2rem;
      margin-bottom: 2rem;
      list-style: none;
      flex-wrap: wrap;


      p{
        background-color: ${({theme})=> theme.COLORS.BACKGROUND_DARK_1000};
        color: ${({theme})=> theme.COLORS.TXT_LIGHT_100};
        border-radius: 5px;
        padding: 4px 8px;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 2.4rem;
      }
  

    }
    .orderBtn{
      
      button{
        display:flex;
        align-items:center;
        margin-right: 3rem;
        min-width: 20.5rem;
      
      }
      
      img{
        width:2rem;
        height:2rem;
      }
    }
    .orderAndQtd{
     display: flex;
     margin-bottom: 24vh;

     
    }
      .qtdOfOrder{
        display: flex;
        margin: 0 8vw;
        padding-left: 2rem;
        justify-content: center;
        align-items: center;

        text-align: center;
        img {
          height: 2rem;
          width: 2rem;
        }
      }
      label {
      color:${({theme})=> theme.COLORS.TXT_LIGHT_300};
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 2rem;
      line-height: 100%;
      margin: 0 15px;
    }
    a {
      display:flex;
      align-items: center;
      text-decoration: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 140%;
      margin-bottom: 2rem;
      margin-left: 7vw;

      color : ${({theme})=> theme.COLORS.TXT_LIGHT_300}
    }
    img {
      width: 26.4rem;
      height: 26.4rem;
      border-radius: 50%;


    }
   }
  
 
     

  
  
`;
