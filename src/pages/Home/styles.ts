import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 5.875rem 0;
  text-align: left;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 3.375rem;
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`

export const CoffeeCard = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    margin-top: -2rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 1.3;
    margin-bottom: 2.0625rem;
  }

  footer {
    display: flex;
    gap: 0.5rem;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    flex: 1;
    align-self: flex-end;

    p {
      font-size: 0.875;
      line-height: 1.3;
      color: ${(props) => props.theme['base-text']};
      margin-bottom: 0;

      span {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        line-height: 1.3;
        font-weight: 900;
      }
    }
  }
`

export const BadgeContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin: 1rem 0;
`

export const Badge = styled.span`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.625rem;
  font-weight: 700;
`
export const Counter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.25rem 0.5rem;

  input {
    width: 2rem;
    height: 2rem;
    text-align: center;
    border: none;
    background: none;
    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
    line-height: 1.3;
    padding: 0;

    &:focus {
      outline: none;
    }
  }

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    font-size: 1.25rem;
  }
`

export const ShoppingCartButton = styled.button`
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  color: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
`
