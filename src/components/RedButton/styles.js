import styled from 'styled-components';

export const Container = styled.button`

  background-color:${({theme})=> theme.COLORS.BACKGROUND_TOMATO_100};
  justify-content: center;
  align-items: center;
  padding: 12px 32px;
  gap: 8px;
  border-radius: 5px;
  color:${({theme})=> theme.COLORS.TXT_LIGHT_100};
  border: none;

`
