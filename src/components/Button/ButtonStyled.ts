import styled from 'styled-components';

type ButtonProps = {
  small?: boolean;
  bg: string;
};
export const ButtonStyled = styled.button<ButtonProps>`
  font-size: ${props => (props.small ? '15px' : '30px')};
  background-color: ${props => props.bg};
  border: 4px solid orange;
  color: white;
  padding: 10px 20px;
`;
