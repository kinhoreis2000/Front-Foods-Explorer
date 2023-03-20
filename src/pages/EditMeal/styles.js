import styled from 'styled-components';
import 'swiper/css';

export const Container = styled.div`
 
  >.Form{
    padding-top: 11.4rem;
    width: 90%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    gap: 2rem;
    h1{
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      color: ${({theme})=> theme.COLORS.TXT_LIGHT_300};

      line-height: 140%;
    }
    p{
    display: flex;
    margin:2rem 0;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
      
    }
    a{
      margin-top: 1rem;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 1.65459rem;
      line-height: 140%;
      text-decoration: none;
      color: ${({theme})=> theme.COLORS.TXT_LIGHT_300}
    }
   .PhotoUpload{

    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    background-color: #fff;
    color: #000;
    font-size: 16px;
    font-weight: 600;
    }
    .saveBtn{
      background-color:transparent;
      display:flex;
      gap:2rem;
      button {
      width: 100%;
      gap: 3rem;
      margin: 2rem 0 ;

    }
    button:nth-child(1){
      background-color:  ${({theme})=> theme.COLORS.BACKGROUND_DARK_800}
    }
   
  }
  }
  .ingredients{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: start;
    border-radius: 10px;
    padding: 1rem 1rem;
    input{

      background-color: transparent;
    }
  }
    label:nth-child(6){
      background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};

    }
`;

export const Form = styled.form`

 >label{
   background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_800};
   display: flex;
   align-items: center;
   width: 100%;
   border-radius: 8.1px;
    height: 4.8rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    gap: 2rem;

    line-height: 2.4rem;
    svg{
      width: 3rem;
      height: 3rem;
      margin: 0 1rem;
    }

     input{
        display:none;

      }
    }
    
    div {
      background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_800};
      input{
      background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_800};
    
      }
     

    }
    
  
`;
