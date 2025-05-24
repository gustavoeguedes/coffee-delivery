import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5rem auto;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
  justify-content: center;

  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    line-height: 1.3;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: 400;
    line-height: 1.3;
  }
`
export const SuccessContent = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  border: 1px solid ${(props) => props.theme.yellow};
  gap: 2rem;
  width: 100%;

  div {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: flex-start;

    span {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: ${(props) => props.theme['yellow-dark']};
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${(props) => props.theme.white};
    }

    strong {
      font: 700;
    }
  }
`
