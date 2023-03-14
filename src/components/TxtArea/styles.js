import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: flex-start;
  padding: 12px 14px;
  gap: 14px;
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
  border-radius: 8.1px;
  height: 4.8rem;
  height: 30vh;

  input {
  
  width: 100%;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
  color:${({theme})=> theme.COLORS.TXT_LIGHT_100};

  }
`

