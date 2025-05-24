import styled from 'styled-components'

export const CompleteOrderFormContainer = styled.div`
  flex: 1;

  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
  }

  section {
    display: flex;
    gap: 0.75rem;
    flex-direction: column;
  }
`
export const FormContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  /* header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    justify-content: center;

    span {
      color: ${(props) => props.theme['yellow-dark']};
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 0 0.125rem;
      padding: 0;

      h3 {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 400;
      }

      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
        font-weight: 400;
        margin-top: 0.125rem;
      }
    }
  } */
`
export const HeaderFormContainer = styled.header`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;

  span {
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0 0.125rem;
    padding: 0;

    h3 {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 400;
    }

    p {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-text']};
      font-weight: 400;
      margin-top: 0.125rem;
    }
  }
`
const InputSize = {
  full: '100%',
  eighty: '80%',
  half: '50%',
  third: '33.3333%',
  quarter: '25%',
  fifth: '20%',
  sixth: '16.6667%',
  seventh: '14.2857%',
  eighth: '12.5%',
  ninth: '11.1111%',
  tenth: '10%',
}

interface InputProps {
  size: keyof typeof InputSize
}

export const InputContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  flex: 1;
  width: 100%;
`
export const Input = styled.input<InputProps>`
  background: ${(props) => props.theme['base-input']};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  padding: 12px;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  width: ${(props) => InputSize[props.size]};
  margin-top: 0.75rem;

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }
`

export const InputPayment = styled.label`
  flex: 1;
  display: flex;
  gap: 0.75rem;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme['base-button']};
  padding: 1rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme['base-text']};
  border-radius: 6px;
  text-transform: uppercase;
  border: 1px solid transparent;

  svg {
    color: ${(props) => props.theme.purple};
  }
  input {
    display: none;
  }

  &:has(input:checked) {
    background-color: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme.purple};
  }
`
