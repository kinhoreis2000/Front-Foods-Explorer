import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  border: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;

  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 14px;
  background-color:${({theme})=> theme.COLORS.BACKGROUND_DARK_900};
  border-radius: 8.1px;
`
