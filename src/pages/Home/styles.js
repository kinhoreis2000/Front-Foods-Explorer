import styled from 'styled-components';
import 'swiper/css';

export const Container = styled.div`
    .head {
      display: flex;
     justify-content: center;
    }
    .pageHome{
      width: 100vw;
      h3 {
        margin-left: 6vw;
      }
  
    }

    .HomeADS {

        margin-top: 5rem;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        width: 90vw;
        background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
        border-radius: 2.91696px;
        justify-content: flex-end;
        position: relative;

    }

    .imgSide img {
      height: 22rem;
      width: 22rem;
      position: absolute;
      top: 40px;
      left: -5vw;
      z-index: 1;
      justify-content: flex-end;
  

    }

    .textSide {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      margin-left: 16rem;
      margin-top: 4.6rem;
      margin-bottom: 2rem;
      max-width: 30rem;
      z-index: 2;
      p{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
      }
    }


      .refeicoes {
        margin: 2rem 0rem;
      }


    @media (min-width: 412px) {
      .imgSide img {
     
        top: 15px;

      }
    }
    @media (min-width: 464px) {
      .imgSide img {
     
        top: -8px;

      }
    }

  
    @media (min-width: 469px) {
      .imgSide img {
     
        top: -46px;

      }
    }



   
  
`;
