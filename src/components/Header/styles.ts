import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;

  div {
    display: flex;
    gap: 0.75rem;
  }
`

export const Location = styled.span`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  img {
    color: ${(props) => props.theme.purple};
  }
`

interface CartProps {
  cartItems: number
}

export const Cart = styled(NavLink)<CartProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  border-radius: 6px;
  transition: background-color 0.2s;
  position: relative;

  &::after {
    content: '${(props) => props.cartItems}';
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
    display: ${(props) => (props.cartItems > 0 ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: ${(props) => props.theme.yellow};
  }
`
