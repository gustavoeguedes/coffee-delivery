import styled from 'styled-components'

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px 6px 44px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`

export const Card = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  padding: 2rem 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
    border-radius: 6px;
  }

  div {
    display: flex;
    flex-direction: row;
    gap: 3.125rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        gap: 0.5rem;
      }
    }
  }
`
export const ButtonRemove = styled.button`
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  border: none;
  border-radius: 6px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};
  }
`
export const CompleteOrderButton = styled.button`
  width: 100%;
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  font-weight: 700;
`
export const Counter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0rem 0.5rem;

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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
    appearance: none;
  }

  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
    font-size: 0.875rem;
  }
`

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;

  div {
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`
