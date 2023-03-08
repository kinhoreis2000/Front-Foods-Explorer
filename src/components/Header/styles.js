import styled from 'styled-components';


export const Container = styled.div`

  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_700};
  padding-left: 1rem;
  padding-right: 1rem;
 


  .header {
    width: 100%;
    height: 11.4rem;
    display: flex;
    align-items: center;
    


    display: flex;
    justify-content: space-around;
    align-items: center;


   


    .optionsPhone {         
      img{
        height: 2.8rem;
     
      }
  
    }
    .logoFoodsExplorer {

      display: flex;
      justify-content: space-around;
      align-items: center;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 2.11629rem;
      line-height: 2.5rem;

        img{
          margin-right: 2rem;
          margin-left: 3rem;
        }

    }

    .ordersBTN {
      display: flex;
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.4rem;
        display:flex;

        width: 3rem;
        height: 3rem;
        padding: .2rem;
        top: -10px;
        right: -30px;
        align-items: center;
        position: relative;

        background-color:${({theme})=> theme.COLORS.BACKGROUND_TOMATO_100};
        border-radius: 50%;
        justify-content: center;
        border-radius: 50%;
        z-index: 1;


        }
      img {
        height: 3.8rem;
   
        z-index: 0;
      }
      
      
      
    }
  }
`

